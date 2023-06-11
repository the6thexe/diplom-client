import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchSpecs, fetchStudents, fetchGroups } from '../http/padAPI'
import Carusel from '../components/Carusel'
import StudentTable from '../components/tables/StudentTable' 

const Shop = observer(() => {
  const { student } = useContext(Context)

  useEffect(() => {
    fetchGroups().then(data => student.setGroups(data))
    fetchSpecs().then(data => student.setSpecs(data))
    fetchStudents().then(data => student.setStudents(data))

  }, [])

  return (
    <Container>
      <Carusel/>
    </Container>
  )
})

export default Shop