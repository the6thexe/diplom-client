import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import MarkTable from '../components/tables/MarkTable'
import CreateTeacher from '../components/modals/CreateTeacher'
import { observer } from 'mobx-react-lite'

const AdminTeacher = () => {
  const [teacherVisible, setTeacherVisible] = useState(false)
  return (
    <Row>
      <Col md={1}>
      </Col>
      <Col md={10}>
        <MarkTable />
      </Col>
      <Col md={1}>
      </Col>
    </Row>
  )
}

export default AdminTeacher