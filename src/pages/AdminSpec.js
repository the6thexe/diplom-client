import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import SpecTable from '../components/tables/SpecTable'
import CreateSpec from '../components/modals/CreateSpec'

const AdminSpec = () => {
  const [specVisible, setSpecVisible] = useState(false)
  return (
    <Row>
      <Col md={1}>
      </Col>
      <Col md={8}>
        <SpecTable />
      </Col>
      <Col md={2}>
        <Button
          variant={"outline-dark"}
          className="mt-4"
          onClick={() => setSpecVisible(true)}
        >
          Добавить специальность
        </Button>
        <CreateSpec show={specVisible} onHide={() => setSpecVisible(false)} />
      </Col>
      <Col md={1}>
      </Col>
    </Row>
  )
}

export default AdminSpec