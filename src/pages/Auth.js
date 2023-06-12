import React, { useContext, useState, } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE,  MAIN_ROUTE } from '../utils/consts'
import { logining, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const history = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await logining(login, password)
      } else {
        data = await registration(login, password)
      }
      user.setUser(user)
      user.setIsAuth(true)

      history(MAIN_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{
          height: window.innerHeight - 54
        }}
      >
        <Card style={{ width: 600, backgroundColor: "rgba(184, 170, 195, 1)", }} className="p-5">
          <h2 className="m-auto">Авторизация</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              className="mt-3"
              placeholder='Введите ваш логин...'
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder='Введите ваш пароль...'
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
            <Form className="d-flex justify-content-between mt-3 pt-3 pr-3">
              <Button className='ms-auto'
                variant={"outline-success"}
                onClick={click}
              >
                Войти
              </Button>
            </Form>
          </Form>
        </Card>
      </Container>
    </div>
  )
})

export default Auth