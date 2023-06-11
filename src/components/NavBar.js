import React, { useContext } from 'react'
import { Context } from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from 'react-router-dom'
import { MAIN_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { Button, Container } from "react-bootstrap"
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router-dom'
import Offcanvas from '../components/Offcanvas'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar style={{ marginBottom: '10px', height: "55px", backgroundColor: 'rgba(97, 48, 135, 1)' }} /*bg="dark"*/ variant="dark">
            <Offcanvas />
            <Container>
                <NavLink className="ms-auto" style={{ font: 'Jomhuria', color: 'white' }} to={MAIN_ROUTE}>{user._isOpenBar ? "WISP" : "Writer Inner System Pannel"}</NavLink>
            </Container >
        </Navbar>

    )
})

export default NavBar