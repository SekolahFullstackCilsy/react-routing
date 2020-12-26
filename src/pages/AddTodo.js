import { Fragment } from 'react'
import { Container, Button } from 'react-bootstrap'
import useRouter from 'use-react-router'
import { NavBar } from '../components/Navbar'
import { onClickTodos } from '../utils/add-todo.util'

const AddTodoPage = () => {
  const { history } = useRouter()

  return (
    <Fragment>
      <NavBar />

      <Container>
        <p>Halaman Add Todo</p>

        <Button onClick={onClickTodos(history)}>Kembali ke Todos</Button>
      </Container>
    </Fragment>
  )
}

export { AddTodoPage }