import { Button, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index'
import { deleteOneM, deleteOneStudent, deleteOneTeacher, fetchDisciplines, fetchGroups, fetchMs, fetchStudents, fetchTeachers } from '../../http/padAPI';
import { observer } from 'mobx-react-lite';


const columns = (handleIconClick) => [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Отметка',
        dataIndex: 'mark',
        key: 'mark',
    },
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Инфо',
        dataIndex: 'info',
        key: 'info',
    },
    {
        title: 'Студент',
        dataIndex: 'student',
        key: 'student',
        render: (text) => <a >{text}</a>,
    },
    {
        title: 'Предмет',
        dataIndex: 'discipline',
        key: 'discipline',
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

const TeacherTable = observer(() => {
    const [data, setData] = useState([]);

    const handleIconClick = async (record) => {
        await deleteOneM(record)
    };

    const { student } = new useContext(Context)
    useEffect(() => {
        const fetchData = async () => {
            await fetchMs().then(data => student.setMs(data));
            
            setData(student.ms.map((m, index) => {
                return {
                    key: index,
                    id: m.id,
                    mark: m.mark,
                    date: m.date,
                    info: m.info,
                    student: m.studentId,
                    discipline: m.disciplineId,
                    editable: true
                };
            }));
        }
        fetchData();
    }, [student.teachers]);

    return <>
        <Table columns={columns(handleIconClick)} dataSource={data} />
    </>
})

export default TeacherTable;