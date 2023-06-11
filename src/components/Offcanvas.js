import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PAD_ROUTE } from '../utils/consts';



function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        user.setIsOpenBar(false)
    };
    const handleShow = () => {
        setShow(true)
        user.setIsOpenBar(true)
    };

    const { user } = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    const history = useNavigate()
    return (
        <>
            <Button variant='clear' onClick={handleShow}>
                <img src='menu.ico' width='40px' height='30px' />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ textAlign: 'center' }}>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Button variant={"outline-light"} style={{ variant: 'outline-dark', margin: '10px', padding: '16px', width: "400px", textAlign: 'left', backgroundColor: "rgba(97, 48, 135, 1)" }} onClick={() => history(MAIN_ROUTE)}>
                        Главная
                    </Button>

                    {user._isAuth ?
                        <><Button variant={"outline-light"} style={{ variant: 'outline-dark', margin: '10px', padding: '16px', width: "400px", textAlign: 'left', backgroundColor: "rgba(97, 48, 135, 1)" }} onClick={() => history(PAD_ROUTE)}>
                            Журнал
                        </Button>

                            <Button
                                variant={"outline-light"} style={{ variant: 'outline-dark', margin: '10px', padding: '16px', width: "400px", textAlign: 'left', backgroundColor: "rgba(97, 48, 135, 1)" }}
                                onClick={() => history(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>




                        </>
                        :
                        <>

                            <Button
                                variant={"outline-light"} style={{ variant: 'outline-dark', margin: '10px', padding: '16px', width: "400px", textAlign: 'left', backgroundColor: "rgba(97, 48, 135, 1)" }}
                                onClick={() => history(LOGIN_ROUTE)}
                            >
                                Авторизация
                            </Button>

                        </>
                    }
                    {user._isAuth ?
                        <Button
                            style={{ margin: '10px' }}
                            variant={"outline-danger"}
                            onClick={() => logOut()}
                            className="ms-2"
                        >
                            Выйти
                        </Button>
                        :
                        <></>
                    }

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;