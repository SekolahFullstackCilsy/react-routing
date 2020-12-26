import { Fragment } from "react"
import { Container } from "react-bootstrap"
import useRouter from "use-react-router"
import { NavBar } from "../components/Navbar"

export const DetailTodo = () => {
  const { match } = useRouter()

  return (
    <Fragment>
      <NavBar />

      <Container>
        <p>Halaman Detail Todo</p>

        <p>
          {match.params.id}
        </p>
      </Container>

      <a href="https://google.com">Ke google</a>
    </Fragment>
  )
}