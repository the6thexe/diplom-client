import { Button, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index'
import { deleteOneStudent, fetchDisciplines, fetchGroups, fetchStudents } from '../../http/padAPI';
import { observer } from 'mobx-react-lite';


const columns = (handleIconClick) => [
    {
        title: 'Номер Зачетки',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a >{text}</a>,
    },
    {
        title: 'ФИО',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a >{text}</a>,
    },
    {
        title: 'Группа',
        dataIndex: 'groupId',
        key: 'groupId',
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

const StudentTable = observer(() => {
    const [data, setData] = useState([]);

    const handleIconClick = async (record) => {
        await deleteOneStudent(record)
    };

    const { student } = new useContext(Context)
    useEffect(() => {
        const fetchData = async () => {
            await fetchStudents().then(data => student.setStudents(data));
            
            setData(student.students.map((student, index) => {
                return {
                    key: index,
                    id: student.id,
                    name: student.name,
                    groupId: student.groupId,
                    editable: true
                };
            }));
        }
        fetchData();
    }, [student.students]);

    return <>
        <Table columns={columns(handleIconClick)} dataSource={data} />
    </>
})

export default StudentTable;