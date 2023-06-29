import React, { useContext, useEffect, useState } from 'react'
import { Container, Col, Image, Row, Form, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchDisciplines, fetchGroups, fetchOneGroup, fetchOneSpec, fetchOneStudent, fetchOneTeacher, fetchStudents, getAllStudentMarks, getAllTeacherDisciplines } from '../http/padAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'


const GroupPage = /*observer(*/() => {
    const [group, setGroup] = useState({ info: [] });
    const [disciplines, setDisciplines] = useState([])
    const [students, setStudents] = useState([])
    const [teacher, setTeacher] = useState([])
    const [spec, setSpec] = useState([])
    const [averageMark, setAverageMark] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const groupInfo = await fetchOneGroup(id);
            const students = await fetchStudents()
            const teacherInfo = await fetchOneTeacher(groupInfo.teacherId)
            const specInfo = await fetchOneSpec(groupInfo.specId)



            const marks = [];
            for (const student of students) {
                const studentMarks = await getAllStudentMarks(student.id);
                if (studentMarks.length > 0) {
                    marks.push(studentMarks)
                }
            }
            const totalMarks = marks.flat(Infinity).flatMap((mark) => mark.mark);
            
            const avarageMark = (totalMarks.reduce((acc, cur) => acc + cur, 0) / totalMarks.length).toFixed(1);

            setStudents(students)
            setAverageMark(avarageMark)
            setSpec(specInfo)
            setTeacher(teacherInfo)
            setGroup(groupInfo)
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
                            <h4 style={{ marginTop: '10px' }}>Статистика группы:</h4>
                            <hr></hr>
                            <Container style={{ width: '90%', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px' }}>
                                <h3 style={{ textAlign: 'center', width: '100%', marginTop: '10px' }}>{group.groupId}</h3>
                                <hr></hr>
                                <Col>

                                    <h6>Учебная специальность:</h6>
                                    {
                                        spec.name
                                    }
                                </Col>
                                <Col style={{ marginBottom: '20px' }}>
                                    <h6>Куратор:</h6>
                                    {
                                        teacher.name
                                    }
                                </Col>
                            </Container>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col style={{ marginRight: '37px', marginLeft: '37px', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px', marginTop: '10px' }}>
                                <h5 style={{ marginTop: '10px' }}>
                                    Средняя успеваемость по группе:
                                </h5>
                                <hr></hr>
                                {averageMark}
                            </Col>
                            <Col style={{ marginRight: '37px', marginLeft: '37px', backgroundColor: 'rgb(172, 149, 189)', borderRadius: '25px', marginTop: '10px' }}>
                                <h5 style={{ marginTop: '10px' }}>
                                    Список студентов:
                                </h5>
                                <hr></hr>
                                 {students.map((student) => {
                                    return (
                                        <div>
                                            <p>{student.name} </p>
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
}/*)*/

export default GroupPage