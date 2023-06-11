import React, { useContext, useEffect, useState } from 'react'
import { Container, Col, Image, Row, Form, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchDisciplines, fetchGroups, fetchOneGroup, fetchOneStudent } from '../http/padAPI'
import { observer } from 'mobx-react-lite'
import {Context} from '../index'

const StudentPage = observer(() => {
  const [student, setStudent] = useState({ info: [] })
  const [group, setGroups] = useState({ info: [] })
  const { id } = useParams()

   useEffect (() => {
    async function fetchData(){
      const studentInfo = (await fetchOneStudent(id).then(data => setStudent(data))).data
      const groupInfo = (await fetchOneGroup(student.groupId).then(data => setGroups(data))).data
      if(!ignore) {
        student.setGroups(groupInfo)
        student.setStudent(studentInfo)
      }
    }
    let ignore = false
    fetchData()
    return () => {
      ignore = true
    }
  }, [])

  return (
    <Container className="mt-3">
      <Row>
        <Col md={2}>
        </Col>
        <Col md={8}>
          <Container style={{ height: '90vh', backgroundColor: 'rgb(197, 179, 210)' }}>
            <Row>
              <Container style={{ width: '99%', margin: '5px', backgroundColor: 'rgb(255, 255, 255)' }}>
                <Col md={3}>
                  <h1>{student.name}</h1>
                </Col>
                <Col md={3}>
                    {
                      group.groupId
                    }
                </Col>
              </Container>
            </Row>
            <hr></hr>
            <Row>
              <Col>
                Посещаемость
              </Col>
              <Col>
                Ср.бал
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={2}>
        </Col>
      </Row>
    </Container>
  )
})

export default StudentPage