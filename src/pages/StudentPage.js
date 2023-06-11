import React, { useContext, useEffect, useState } from 'react'
import { Container, Col, Image, Row, Form, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchDisciplines, fetchGroups, fetchOneGroup, fetchOneStudent, getAllStudentMarks } from '../http/padAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const StudentPage = observer(() => {
  const [student, setStudent] = useState({ info: [] });
  const [group, setGroups] = useState({ info: [] });
  const [disciplines, setDisciplines] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      const studentInfo = await fetchOneStudent(id);

      const groupInfo = await fetchOneGroup(studentInfo.groupId)
      const marks = await getAllStudentMarks(studentInfo.id);

      const disciplinesData = [];
      marks.forEach(mark => {
        const discipline = disciplinesData.find((discipline) =>  discipline.name === mark.discipline.name)
        if(!discipline){
          disciplinesData.push({
            name: mark.discipline.name,
            disciplineSource:  mark.discipline,
            marks: [mark]
          })
        }else{
          console.log(discipline)
          discipline.marks.push(mark);
        }
      });
      console.log(disciplinesData);
      setStudent(studentInfo)
      setGroups(groupInfo)
      setDisciplines(disciplinesData)
      console.log(disciplinesData[0].marks.reduce((acc, cur) => acc + cur.mark, 0))

    }

    fetchData()

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
            {disciplines.map((discipline) => {
              return (
                <div>
                  <p>{discipline.name}</p>
                  <p>{discipline.marks.reduce((acc, cur) => acc + cur.mark, 0) / discipline.marks.length}</p>
                </div>
              )
            })}
          </Container>
        </Col>
        <Col md={2}>
        </Col>
      </Row>
    </Container>
  )
})

export default StudentPage