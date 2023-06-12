import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import TeacherTable from '../components/tables/TeacherTable'
import CreateTeacher from '../components/modals/CreateTeacher'

const AdminTeacher = () => {
  const [teacherVisible, setTeacherVisible] = useState(false)
  return (
    <Row>
      <Col md={1}>
      </Col>
      <Col md={8}>
        <TeacherTable />
      </Col>
      <Col md={2}>
      <hr></hr>
        <Button
          variant={"outline-dark"}
          onClick={() => setTeacherVisible(true)}
        >
          Добавить преподавателя
        </Button>
        <hr></hr>
        <CreateTeacher show={teacherVisible} onHide={() => setTeacherVisible(false)} />
      </Col>
      <Col md={1}>
      </Col>
    </Row>
  )
}

export default AdminTeacher