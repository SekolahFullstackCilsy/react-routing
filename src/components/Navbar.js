import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Nav.Link>
            <Link 
              to={{
                pathname: "/todos",
                search: "title=bola",
                hash: "desc=siaran"
              }}
              className="text-decoration-none text-reset"
            >
              Todos
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link 
              to={{
                pathname: "/todos/add",
                search: "data=makan"
              }}
              className="text-decoration-none text-reset"
            >
              Add Todo
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}