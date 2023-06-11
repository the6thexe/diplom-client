import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index'
import { fetchDisciplines, fetchGroups, fetchSpecs, fetchStudents } from '../../http/padAPI';
import { observer } from 'mobx-react-lite';
import '../../css/table.css'


const columns = (handleInputChange) => [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a >{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a >{text}</a>,
    },
   
];

const SpecTable = observer(() => {
    const [data, setData] = useState([]);

    const { student } = new useContext(Context)
    useEffect(() => {
        fetchGroups().then(data => student.setGroups(data))
        fetchStudents().then(data => student.setStudents(data))
        fetchDisciplines().then(data => student.setDisciplines(data))
        fetchSpecs().then(data => student.setSpecs(data))

    }, [])

    const handleInputChange = (value, key, field) => {
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        newData[index][field] = value;
        setData(newData);
    };

    return <>
        <Table columns={columns(handleInputChange)} dataSource=
            {
                student.specs
                    .map((spec, index) => {
                        return {
                            key: index,
                            id: spec.id,
                            name: spec.name
                        };
                    })
            } />
    </>
})

export default SpecTable;