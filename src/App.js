import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner, Button } from "react-bootstrap";
import Offcanvas from "./components/Offcanvas";

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])

  if (loading) {
    return <>
      <Button style={{ backgroundColor: "rgba(97, 48, 135, 1)" }} variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button style={{ backgroundColor: "rgba(97, 48, 135, 1)", margin: '100%, 100%, 0, 0' }} variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>

    </>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
