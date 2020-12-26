import { Fragment } from 'react'
import { Container, Button } from 'react-bootstrap'
import { NavBar } from '../components/Navbar'

export const LoginPage = () => {
  return (
    <Fragment>
      <NavBar />
      <Container>

        <p>Halaman Login</p>

        <Button>Login</Button>
      </Container>
    </Fragment>
  )
}