import React, { useState } from 'react'
import StudentTable from '../components/tables/StudentTable'
import { Button, Col, Row } from 'react-bootstrap'
import CreateStudent from '../components/modals/CreateStudent'
import { observer } from 'mobx-react-lite'

const AdminStudent = observer(() => {
  const [studentVisible, setStudentVisible] = useState(false)
  return (
    <Row>
      <Col md={1}>
      </Col>
      <Col md={8}>
        <StudentTable/>
      </Col>
      <Col md={2}>
        <hr></hr>
        <Button
          variant={"outline-dark"}
          className="mt-4"
          onClick={() => setStudentVisible(true)}
        >
          Добавить студента
        </Button>
          <hr>
          </hr>
        <CreateStudent show={studentVisible} onHide={() => setStudentVisible(false)} />
        <hr></hr>
      </Col>
      <Col md={1}>
      </Col>
    </Row>
  )
})

export default AdminStudent