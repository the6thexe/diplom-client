import { Button, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index'
import { deleteOneDiscipline, fetchDisciplines } from '../../http/padAPI';
import { observer } from 'mobx-react-lite';


const columns = (handleIconClick) => [
    {
        title: 'Номер учебного предмета',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a >{text}</a>,
    },
    {
        title: 'Название учебного предмета',
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
                Delete
            </Button>
        ),
    },
];

const DisciplineTable = observer(() => {
    const [data, setData] = useState([]);

    const handleIconClick = async (record) => {
        await deleteOneDiscipline(record)
    };
    const { student } = new useContext(Context)
    useEffect(() => {
        const fetchData = async () => {
            await fetchDisciplines().then(data => student.setDisciplines(data));
            setData(student.disciplines.filter((disciplines) => disciplines.groupId === student.selectedGroup.id)
                .map((discipline, index) => { 
                return {
                    key: index,
                    id: discipline.id,
                    name: discipline.name,
                    editable: true
                };
            }));
        }
        fetchData();
    }, [student.disciplines]);

    return <>
        <Table columns={columns(handleIconClick)} dataSource={data} />
    </>
})

export default DisciplineTable;