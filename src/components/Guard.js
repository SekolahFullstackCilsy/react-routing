import { Redirect, Route } from 'react-router-dom'

export const Guard = (props) => {
  const isAuthenticate = false

  return isAuthenticate ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  )
}