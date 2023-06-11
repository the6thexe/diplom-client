import { Space, Table, Tag } from 'antd';
import { Context } from '../index';
import { useContext, useEffect } from 'react';
import { fetchDisciplines, fetchGroups, fetchStudents } from '../http/padAPI';
import { observer } from 'mobx-react-lite';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        value: '10'
    },
    {
        title: 'Mark',
        dataIndex: 'mark',
        key: 'mark',
        value: '10'
    },
    {
        title: 'Info',
        dataIndex: 'info',
        key: 'info',
        value: '10'
    }
];



const Journal = observer(() => {
    const { student } = new useContext(Context)
    useEffect(() => {
        fetchGroups().then(data => student.setGroups(data))
        fetchStudents().then(data => student.setStudents(data))
        fetchDisciplines().then(data => student.setDisciplines(data))
    
      }, [])
    console.log(student._selectedGroup)
    return <Table style={{backgroundColor: 'rgba(184, 170, 195, 1)'}} columns={columns} dataSource=
        {
            student.students.filter((students) => students.groupId === student.selectedGroup.id)
                .map((student, index) => {
                    return {
                        key: index,
                        name: student.name,
                    };
                })
        } />

})
export default Journal;