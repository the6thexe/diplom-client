import { Input, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../index'
import { createM, fetchDisciplines, fetchGroups, fetchStudents } from '../http/padAPI';
import { observer } from 'mobx-react-lite';
import '../css/table.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { STUDENT_ROUTE } from '../utils/consts';


const columns = (handleInputChange, routing, handleIconClick) => [
    {
        title: 'Номер',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: 'Номер зачетки',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Студент',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <a
            onClick={() => routing(record.id)}
        >{text}</a>,
        onFilter: (text, record) => record.name.indexOf(text) === 0,
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: 'Отметка',
        dataIndex: 'mark',
        key: 'mark',
        editable: true,
        render: (text, record) => {
            return record.editable ? (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, record.id)}
                />
            ) : (
                text
            );
        },
    },
    {
        title: 'Доп.информация',
        dataIndex: 'info',
        key: 'info',
        editable: true,
        render: (text, record) => {
            return record.editable ? (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, record.id)}
                />
            ) : (
                text
            );
        },
    },
    {
        title: '',
        dataIndex: 'actions',
        key: 'actions',
        render: (_, record) => (
            <Button
                style={{ borderBlockColor: 'red', backgroundColor: "white", color: 'black' }}
                onClick={() => handleIconClick(record.id)}
            >
                Сохранить
            </Button>
        ),
    },
];

const Journal = observer(() => {
    const rec = false;
    const [data, setData] = useState([]);
    const history = new useNavigate()

    const routing = (id) => {
        history(STUDENT_ROUTE + "/" + id)
    }

    const handleIconClick = async (record) => {
        recordIn()
    };

    const { student } = new useContext(Context)
    useEffect(() => {
        fetchGroups().then(data => student.setGroups(data))
        fetchStudents().then(data => student.setStudents(data))
        fetchDisciplines().then(data => student.setDisciplines(data))

    }, [])

    const addMark = () => {
        const formData = new FormData()
        formData.append('mark', student.selectedMark)
        formData.append('date', student.selectedDate)
        formData.append('info', student.selectedInfo)
        formData.append('studentId', student.selectedId)
        formData.append('disciplineId', student.selectedDiscipline.id)
        createM(formData)
    }

    const handleInputChange = (value, id) => {

        student.setSelectedId(id)

        if (parseInt(value)) {
            student.setSelectedMark(value)
        } else {
            student.setSelectedInfo(value)

        }

        console.log(student.selectedMark, "mark")
        console.log(student.selectedDate, "date")
        console.log(student.selectedInfo, "info")
        console.log(student.selectedId, "stud")
        console.log(student.selectedDiscipline.id, "disc")
    };


    const recordIn = () => {
        if (student.selectedMark != null & student.selectedDate != null & student.selectedInfo != null & student.selectedId != null & student.selectedDiscipline.id != null) {
            addMark()
        } else {
            return alert('Данные не заполнены')
        }
    }


    return <>
        <Table columns={columns(handleInputChange, routing, handleIconClick)} dataSource=
            {
                student.students.filter((students) => students.groupId === student.selectedGroup.id)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((student, index) => {
                        return {
                            key: index,
                            num: index+1,
                            id: student.id,
                            name: student.name,
                            editable: true
                        };
                    })
            } />
    </>
})

export default Journal;