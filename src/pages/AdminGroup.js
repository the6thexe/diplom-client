import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import GroupTable from '../components/tables/GroupTable'
import CreateGroup from '../components/modals/CreateGroup'
import SpecBar from '../components/SpecBar'
import { observer } from 'mobx-react-lite'

const AdminGroup = observer(() => {
  const [groupVisible, setGroupVisible] = useState(false)
  return (
    <Row>
      <Col md={1}>
      </Col>
      <Col md={8}>
        <GroupTable />
      </Col>
      <Col md={2}>
      <hr></hr>
      <SpecBar></SpecBar>
      <hr></hr>
        <Button
          variant={"outline-dark"}
          onClick={() => setGroupVisible(true)}
        >
          Добавить группу
        </Button>
        <hr></hr>
        <CreateGroup show={groupVisible} onHide={() => setGroupVisible(false)} />
      </Col>
      <Col md={1}>
      </Col>
    </Row>
  )
})

export default AdminGroup