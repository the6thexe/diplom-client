import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { createDiscipline } from '../../http/padAPI'

const CreateDiscipline = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addDiscipline = () => {
        createDiscipline({ name: value }).then(data => {
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
                    Добавить дисциплину
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название дисциплины"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addDiscipline}>Добавить дисциплину</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDiscipline