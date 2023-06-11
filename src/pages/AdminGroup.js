import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import GroupTable from '../components/tables/GroupTable'
import CreateGroup from '../components/modals/CreateGroup'

const AdminGroup = () => {
  const [groupVisible, setGroupVisible] = useState(false)
  return (
    <Row>
      <Col md={1}>
      </Col>
      <Col md={8}>
        <GroupTable />
      </Col>
      <Col md={2}>
        <Button
          variant={"outline-dark"}
          className="mt-4"
          onClick={() => setGroupVisible(true)}
        >
          Добавить группу
        </Button>
        <CreateGroup show={groupVisible} onHide={() => setGroupVisible(false)} />
      </Col>
      <Col md={1}>
      </Col>
    </Row>
  )
}

export default AdminGroup