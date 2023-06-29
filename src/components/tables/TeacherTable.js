import { Button, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index'
import { deleteOneStudent, deleteOneTeacher, fetchDisciplines, fetchGroups, fetchStudents, fetchTeachers } from '../../http/padAPI';
import { observer } from 'mobx-react-lite';
import { TEACHER_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';


const columns = (handleIconClick, routing) => [
    {
        title: 'Номер преподавателя',
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
    },
    /*{
        title: 'Логин для входа',
        dataIndex: 'login',
        key: 'login',
        render: (text) => <a >{text}</a>,
    },
    {
        title: 'Пароль для входа',
        dataIndex: 'password',
        key: 'password',
        render: (text) => <a >{text}</a>,
    },*/
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
    const history = new useNavigate()

    const handleIconClick = async (record) => {
        await deleteOneTeacher(record)
    };

    const routing = (id) => {
        console.log(id)
        history(TEACHER_ROUTE + "/" + id)
    }

    const { student } = new useContext(Context)
    useEffect(() => {
        const fetchData = async () => {
            await fetchTeachers().then(data => student.setTeachers(data));
            
            setData(student.teachers.map((teacher, index) => {
                return {
                    key: index,
                    id: teacher.id,
                    name: teacher.name,
                    //login: teacher.login,
                    //password: teacher.password,
                    editable: true
                };
            }));
        }
        fetchData();
    }, [student.teachers]);

    return <>
        <Table columns={columns(handleIconClick, routing)} dataSource={data} />
    </>
})

export default TeacherTable;