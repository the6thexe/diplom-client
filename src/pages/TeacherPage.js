import React, { useContext, useEffect, useState } from 'react'
import { Container, Col, Image, Row, Form, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchDisciplines, fetchGroups, fetchOneGroup, fetchOneSpec, fetchOneStudent, fetchOneTeacher, fetchStudents, getAllStudentMarks, getAllTeacherDisciplines } from '../http/padAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'


const TeacherPage = /*observer(*/() => {
  const [teacher, setTeacher] = useState({ info: [] });
  const [disciplines, setDisciplines] = useState([])
  const [students, setStudents] = useState([])
  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      const teacherInfo = await fetchOneTeacher(id);
      const disciplines = await getAllTeacherDisciplines(id)
      const students = await fetchStudents()





      setDisciplines(disciplines)
      setTeacher(teacherInfo)
    }
    fetchData()

  }, [])

  return (
    <Container className="mt-3">

      <Row>
        <Col md={2}>
        </Col>
        <Col md={8}>
          <Container style={{ height: '90vh', backgroundColor: 'rgb(197, 179, 210)', borderRadius: '25px', marginBottom: '10px' }}>
            <Row style={{ marginBottom: '30px' }}>
              <h4 style={{ marginTop: '10px' }}>Статистика преподавателя:</h4>
              <hr></hr>
              <Container style={{ width: '90%', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px' }}>
                <h3 style={{ textAlign: 'center', width: '100%', marginTop: '10px' }}>{teacher.name}</h3>
                <hr></hr>
                <Col>

                  <h6>Логин:</h6>
                  {
                    teacher.login
                  }
                </Col>
                <Col style={{ marginBottom: '20px' }}>
                  <h6>Пароль:</h6>
                  {
                    teacher.password
                  }
                </Col>
              </Container>
            </Row>
            <hr></hr>
            <Row>
              <Col style={{ marginRight: '37px', marginLeft: '37px', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px', marginTop: '10px' }}>
                <h5 style={{ marginTop: '10px' }}>
                  Предметы:
                </h5>
                <hr></hr>
                {disciplines.map((discipline) => {
                  console.log(discipline)
                  return (
                    <div>
                      <p>{discipline.name} у группы {discipline.group.groupId}</p>
                    </div>
                  )
                })}
              </Col>
              {/* <Col style={{ marginRight: '37px', marginLeft: '37px', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px', marginTop: '10px' }}>
                <h5 style={{ marginTop: '10px' }}>
                  Средняя успеваемость по предметам:
                </h5>
                <hr></hr>
                {disciplines.map((discipline) => {
                  console.log(discipline)
                  return (
                    <div>
                      <p>{discipline.name} у группы {discipline.group.groupId} : </p>
                    </div>
                  )
                })}
              </Col> */}
            </Row>
            <hr></hr>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}/*)*/

export default TeacherPage