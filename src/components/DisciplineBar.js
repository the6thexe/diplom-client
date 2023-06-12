import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Form, Dropdown, ListGroup } from 'react-bootstrap';
import { Context } from '../index';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { fetchDisciplines } from '../http/padAPI';


const DisciplineBar = observer(() => {
    const { student } = useContext(Context)
    useEffect(() => {
        fetchDisciplines().then(data => student.setDisciplines(data))
    }, [])
    return (
        <ListGroup>
            <Dropdown>
                <DropdownToggle variant={"outline-dark"}>
                    {student.selectedDiscipline.name || 'Предмет'}
                </DropdownToggle>
                <DropdownMenu>
                    {student.disciplines.map(discipline =>
                        <DropdownItem
                            active={discipline.id === student.setSelectedDiscipline.id}
                            onClick={() => student.setSelectedDiscipline(discipline)}
                            key={discipline.id}>
                            {discipline.name}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        </ListGroup>
    );
});

export default DisciplineBar