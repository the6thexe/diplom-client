import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { createGroup } from '../../http/padAPI'

const CreateGroup = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addGroup = () => {
        createGroup({ groupId: value }).then(data => {
            setValue('')
            onHide()
        })
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addGroup}>Добавить группу</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateGroup