import { Button, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index'
import { deleteOneStudent, fetchDisciplines, fetchGroups, fetchStudents } from '../../http/padAPI';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { STUDENT_ROUTE } from '../../utils/consts';


const columns = (handleIconClick, routing) => [
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
        render: (text, record) => <a 
        onClick={() => routing(record.id)}
        >{text}</a>,
        onFilter: (text, record) => record.name.indexOf(text) === 0,
        sorter: (a, b) => a.name.localeCompare(b.name),
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
    const history = new useNavigate()

    const handleIconClick = async (record) => {
        await deleteOneStudent(record)
    };

    const routing = (id) => {
        history(STUDENT_ROUTE + "/" + id)
    }

    const { student } = new useContext(Context)
    useEffect(() => {
        const fetchData = async () => {
            await fetchStudents().then(data => student.setStudents(data));
            
            setData(student.students.filter((students) => students.groupId === student.selectedGroup.id)
                .map((student, index) => {
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
        <Table columns={columns(handleIconClick, routing)} dataSource={data} />
    </>
})

export default StudentTable;