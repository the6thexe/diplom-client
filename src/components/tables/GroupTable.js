import { Button, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index'
import { deleteOneDiscipline, deleteOneGroup, fetchDisciplines, fetchGroups } from '../../http/padAPI';
import { observer } from 'mobx-react-lite';
import { GROUP_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';


const columns = (handleIconClick, routing) => [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a >{text}</a>,
    },
    {
        title: 'Название группы',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <a 
        onClick={() => routing(record.id)}
        >{text}</a>,
    },
    {
        title: 'Удалить',
        dataIndex: 'actions',
        key: 'actions',
        render: (_, record) => (
            <Button
                style={{ borderBlockColor: 'red' }}
                onClick={() => handleIconClick(record.id)}
            >
                Удалить
            </Button>
        ),
    },
];

const GroupTable = observer(() => {
    const [data, setData] = useState([]);
    const history = new useNavigate()

    const handleIconClick = async (record) => {
        await deleteOneGroup(record)
    };

    const routing = (id) => {
        history(GROUP_ROUTE + "/" + id)
    }

    const { student } = new useContext(Context)
    useEffect(() => {
        const fetchData = async () => {
            await fetchGroups().then(data => student.setGroups(data));
            setData(student.groups.filter((groups) => groups.specId === student.selectedSpec.id)
                .map((group, index) => {
                return {
                    key: index,
                    id: group.id,
                    name: group.groupId,
                    editable: true
                };
            }));
        }
        fetchData();
    }, [student.groups]);

    return <>
        <Table columns={columns(handleIconClick, routing)} dataSource={data} />
    </>
})

export default GroupTable;