import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateSpec from '../components/modals/CreateSpec'
import { useNavigate } from 'react-router-dom'
import { ADMIN_DISCIPLINE, ADMIN_GROUP, ADMIN_SPEC, ADMIN_STUDENT, ADMIN_TEACHER } from '../utils/consts'


const Admin = () => {
  const history = useNavigate()

  return (
    <Container className='d-flex flex-column'>
      <Button
        variant={"outline-dark"}
        className="mt-4"
        onClick={() => history(ADMIN_STUDENT)}
      >
        Студенты
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4"
        onClick={() => history(ADMIN_TEACHER)}
      >
        Преподаватели
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4"
        onClick={() => history(ADMIN_GROUP)}
      >
        Группы
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4"
        onClick={() => history(ADMIN_SPEC)}
      >
        Специальности
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4"
        onClick={() => history(ADMIN_DISCIPLINE)}
      >
        Дисциплины
      </Button>
    </Container>
  )
}

export default Admin