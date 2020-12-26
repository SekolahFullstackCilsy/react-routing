import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {
  AddTodoPage,
  TodosPage
} from './pages'
import { DetailTodo } from './pages/DetailTodo';
import { LoginPage } from './pages/Login';
import { Guard } from './components/Guard'
import { NotFoundPage } from './pages/404'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={TodosPage} exact={true} path="/todos" />
        <Guard component={AddTodoPage} path="/todos/add" />
        <Redirect from="/todos/tambah" to="/todos/add" />
        <Route component={DetailTodo} path="/todo/:id" />
        <Route component={LoginPage} path="/login" />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
