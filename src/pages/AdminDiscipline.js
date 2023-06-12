import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import DisciplineTable from '../components/tables/DisciplineTable'
import { Context } from '../index'
import { fetchDisciplines } from '../http/padAPI'
import CreateDiscipline from '../components/modals/CreateDiscipline'
import GroupBar from '../components/GroupBar'



const AdminDiscipline = () => {
  const { student } = useContext(Context)

  const [disceplineVisible, setDisciplineVisible] = useState(false)
  return (
    <Row>
      <Col md={1}>
      </Col>
      <Col md={8}>
        <DisciplineTable/>
      </Col>
      <Col md={2}>
      <hr></hr>
      <GroupBar/>
      <hr></hr>
        <Button
          variant={"outline-dark"}
          onClick={() => setDisciplineVisible(true)}
        >
          Добавить учебный предмет
        </Button>
        <hr></hr>
        <CreateDiscipline show={disceplineVisible} onHide={() => setDisciplineVisible(false)} />
      </Col>
      <Col md={1}>
      </Col>
    </Row>
  )
}

export default AdminDiscipline