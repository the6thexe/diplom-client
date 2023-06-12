import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Form, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { createGroup, createTeacher, fetchSpecs, fetchTeachers } from '../../http/padAPI'
import { observer } from 'mobx-react-lite'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Context } from "../../index"

const CreateGroup = observer(({ show, onHide }) => {
    const { student } = useContext(Context)
    const [value, setValue] = useState('')
    useEffect(() => {
        fetchSpecs().then(data => student.setSpecs(data))
        fetchTeachers().then(data => student.setTeachers(data))
    }, [])

    const addGroup = () => {
        const formData = new FormData()
        formData.append('groupId', student.selectedGroup.id)
        formData.append('specId', student.selectedSpec.id)
        formData.append('teacherId', student.selectedTeacher.id)
        createTeacher(formData).then(data => onHide())
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
                    Добавить группу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название группы"}
                    />
                </Form>
                <Dropdown className="mt-3 md-3">
                        <DropdownToggle>{student.selectedTeacher.name || "Куратор"}</DropdownToggle>
                        <DropdownMenu>
                            {student.teachers.map(teacher =>
                                <DropdownItem
                                    onClick={() => student.setSelectedTeacher(teacher)}
                                    key={teacher.id}
                                >
                                    {teacher.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addGroup}>Добавить группу</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateGroup