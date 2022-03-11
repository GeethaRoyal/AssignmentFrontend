import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
// eslint-disable-next-line no-unused-vars
import NotFound from './components/NotFound'
import DisplayData from './components/DisplayData'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/display-data" component={DisplayData} />
  </Switch>
)

export default App
