import { Fragment } from 'react'
import { Container, Button } from 'react-bootstrap'
import { NavBar } from '../components/Navbar'
import useRouter from 'use-react-router'
import { onClickAddTodo } from '../utils/todo.util'
import qs from 'query-string'

const TodosPage = () => {
  const { 
    history,
    match,
    location
  } = useRouter()

  console.log(location)
  console.log(qs.parse(location.search))
  console.log(qs.parse(location.hash))

  return (
    <Fragment>
      <NavBar />
      <Container>

        <p>Halaman List Todo</p>

        <Button onClick={onClickAddTodo(history, match)}>Add Todo</Button>
      </Container>
    </Fragment>
  )
}

export { TodosPage }