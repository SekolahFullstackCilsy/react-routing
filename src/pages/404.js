import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { NavBar } from '../components/Navbar'

export const NotFoundPage = () => {
  return (
    <Fragment>
      <NavBar />
      <Container>

        <p>Halaman Tidak Ditemukan</p>
      </Container>
    </Fragment>
  )
}