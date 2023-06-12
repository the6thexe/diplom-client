import { Button, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index'
import { deleteOneDiscipline, deleteOneGroup, fetchDisciplines, fetchGroups } from '../../http/padAPI';
import { observer } from 'mobx-react-lite';


const columns = (handleIconClick) => [
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
        render: (text) => <a >{text}</a>,
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

    const handleIconClick = async (record) => {
        await deleteOneGroup(record)
    };

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
        <Table columns={columns(handleIconClick)} dataSource={data} />
    </>
})

export default GroupTable;