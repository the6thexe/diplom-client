import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Form, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { createDiscipline, fetchGroups } from '../../http/padAPI'
import { Context } from "../../index"
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

const CreateDiscipline = ({ show, onHide }) => {
    const { student } = useContext(Context)
    const [name, setName] = useState('')

    useEffect(() => {
        fetchGroups().then(data => student.setGroups(data))
    }, [])

    const addDiscipline = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('groupId', student.selectedGroup.id)
        createDiscipline(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить учебный предмет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите название предмета"}
                    />
                </Form>
                <Dropdown className="mt-3 md-3">
                        <DropdownToggle>{student.selectedGroup.groupId || "Выберете группу"}</DropdownToggle>
                        <DropdownMenu>
                            {student.groups.map(group =>
                                <DropdownItem
                                    onClick={() => student.setSelectedGroup(group)}
                                    key={group.id}
                                >
                                    {group.groupId}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addDiscipline}>Добавить учебный предмет</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDiscipline