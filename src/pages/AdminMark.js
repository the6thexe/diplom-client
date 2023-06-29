import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import MarkTable from '../components/tables/MarkTable'
import CreateTeacher from '../components/modals/CreateTeacher'
import { observer } from 'mobx-react-lite'
import GroupBar from '../components/GroupBar'
import { DatePicker, Space } from 'antd'
import DisciplineBar from '../components/DisciplineBar'
import { Context } from '../index'
import { fetchDisciplines, fetchGroups, fetchStudents } from '../http/padAPI'



const AdminTeacher = () => {
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
    <Row>
      <Col md={1}>
      </Col>
      <Col md={8}>
        <MarkTable />
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
      <Col md={1}>
      </Col>
    </Row>
  )
}

export default AdminTeacher