import React, { useContext, useState } from 'react'
import { Modal,} from "react-bootstrap"
import { Button, Form } from "react-bootstrap"
import { Context } from "../../index"
import { createTeacher} from '../../http/padAPI'
import { observer } from 'mobx-react-lite'

const CreateTeacher = observer(({ show, onHide }) => {
    const { student } = useContext(Context)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState(0)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const addTeacher = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('phone', `${phone}`)
        formData.append('login', login)
        formData.append('password', password)
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
                    Добавить Учителя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3 md-3"
                        placeholder="Введите Имя"
                    />
                    {/* <Form.Control
                        value={phone}
                        onChange={e => setPhone(Number(e.target.value))}
                        className="mt-3 md-3"
                        placeholder="Введите номер телефона"
                    /> */}
                    <Form.Control
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        className="mt-3 md-3"
                        placeholder="Введите логин"
                    />
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="mt-3 md-3"
                        placeholder="Введите пароль"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addTeacher}>Добавить студента</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateTeacher