import React from 'react'
import { Modal } from "react-bootstrap"
import { Button, Form } from "react-bootstrap"
import { createSpec } from '../../http/padAPI'
import { useState } from "react"

const CreateSpec = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addSpec = () => {
        createSpec({ name: value }).then(data => {
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
                    Добавить специальность
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название специальности"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addSpec}>Добавить специальность</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateSpec