import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GroupBar from '../components/GroupBar'
import Journal from '../components/Journal'
import { Context } from '../index'
import { fetchDisciplines, fetchGroups, fetchStudents } from '../http/padAPI'
import DisciplineBar from '../components/DisciplineBar'
import { Button, Input, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { DatePicker } from 'antd'

const Pad = () => {
  const { student } = useContext(Context)
  useEffect(() => {
    fetchGroups().then(data => student.setGroups(data))
    fetchStudents().then(data => student.setStudents(data))
    fetchDisciplines().then(data => student.setDisciplines(data))
  }, [])
  const changeDate = (date, dateString) => {
    student.setSelectedDate(dateString)
    console.log(student.selectedDate)
  }


  return (
    <Container>
      <Row>
        <Col md={10}>
          <Journal />
        </Col>
        <Col md={2}>
          <Space direction="vertical">
            <DatePicker 
              onChange={changeDate}
            />
          </Space>
          <hr></hr>
          <GroupBar />
          <hr></hr>
          <DisciplineBar />
          <hr></hr>
        </Col>
      </Row>
    </Container>
  )
}

export default Pad