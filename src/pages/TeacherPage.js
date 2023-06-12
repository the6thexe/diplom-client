import React, { useContext, useEffect, useState } from 'react'
import { Container, Col, Image, Row, Form, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchDisciplines, fetchGroups, fetchOneGroup, fetchOneSpec, fetchOneStudent, getAllStudentMarks } from '../http/padAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'


const StudentPage = observer(() => {
  const [student, setStudent] = useState({ info: [] });
  const [group, setGroups] = useState({ info: [] });
  const [spec, setSpecs] = useState({ info: [] });
  const [disciplines, setDisciplines] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      const studentInfo = await fetchOneStudent(id);

      const groupInfo = await fetchOneGroup(studentInfo.groupId)
      console.log(groupInfo)
      const specInfo = await fetchOneSpec(groupInfo.specId)
      const marks = await getAllStudentMarks(studentInfo.id)

      const disciplinesData = [];
      marks.forEach(mark => {
        const discipline = disciplinesData.find((discipline) => discipline.name === mark.discipline.name)
        if (!discipline) {
          disciplinesData.push({
            name: mark.discipline.name,
            disciplineSource: mark.discipline,
            marks: [mark]
          })
        } else {
          console.log(discipline)
          discipline.marks.push(mark);
        }
      });
      console.log(disciplinesData);
      setStudent(studentInfo)
      setGroups(groupInfo)
      setDisciplines(disciplinesData)
      setSpecs(specInfo)
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
          <Container style={{ height: '90vh', backgroundColor: 'rgb(197, 179, 210)', borderRadius: '25px', marginBottom: '10px' }}>
            <Row style={{ marginBottom: '30px' }}>
              <h4 style={{ marginTop: '10px' }}>Статистика преподавателя:</h4>
              <hr></hr>
              <Container style={{ width: '90%', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px' }}>
                <h3 style={{ textAlign: 'center', width: '100%', marginTop: '10px' }}>{student.name}</h3>
                <hr></hr>
                <Col>

                  <h6>Группа:</h6>
                  {
                    group.groupId
                  }
                </Col>
                <Col style={{ marginBottom: '20px' }}>
                  <h6>Специальность:</h6>
                  {
                    spec.name
                  }
                </Col>
              </Container>
            </Row>
            <hr></hr>
            <Row>
              <Col style={{ marginRight: '37px', marginLeft: '37px', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px', marginTop: '10px' }}>
                <h5 style={{ marginTop: '10px' }}>
                  Посещаемость:
                </h5>
                <hr></hr>
              </Col>
              <Col style={{ marginRight: '37px', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px', marginTop: '10px' }}>
                <h5 style={{ marginTop: '10px' }}>
                  Средний балл:
                </h5>
                <hr></hr>
                {disciplines.map((discipline) => {
                  return (
                    <div>
                      <p>{discipline.name} : {discipline.marks.reduce((acc, cur) => acc + cur.mark, 0) / discipline.marks.length}</p>
                    </div>
                  )
                })}
              </Col>
            </Row>
            <hr></hr>
          </Container>
        </Col>
      </Row>
    </Container>
  )
})

export default StudentPage