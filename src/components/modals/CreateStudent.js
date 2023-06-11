import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Modal} from "react-bootstrap"
import { Button, Form } from "react-bootstrap"
import { Context } from "../../index"
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { createStudent, fetchGroups, fetchSpecs } from '../../http/padAPI'
import { observer } from 'mobx-react-lite'

const CreateStudent = observer(({ show, onHide }) => {
    const { student } = useContext(Context)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState(0)

    useEffect(() => {
        fetchGroups().then(data => student.setGroups(data))
        fetchSpecs().then(data => student.setSpecs(data))
    }, [])

    const addStudent = () => {
        const formData = new FormData()
        formData.append('name', name)
       // formData.append('phone', `${phone}`)
        formData.append('specId', student.selectedSpec.id)
        formData.append('groupId', student.selectedGroup.id)
        createStudent(formData).then(data => onHide())
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
                    Добавить студента
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
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
                    <Dropdown className="mt-3 md-3">
                        <DropdownToggle>{student.selectedSpec.name || "Выберете специальность"}</DropdownToggle>
                        <DropdownMenu>
                            {student.specs.map(spec =>
                                <DropdownItem
                                    onClick={() => student.setSelectedSpec(spec)}
                                    key={spec.id}
                                >
                                    {spec.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3 md-3"
                        placeholder="Введите имя"
                    />
                    {/* <Form.Control
                        value={phone}
                        onChange={e => setPhone(Number(e.target.value))}
                        className="mt-3 md-3"
                        placeholder="Введите номер телефона"
                    /> */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addStudent}>Добавить студента</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateStudent