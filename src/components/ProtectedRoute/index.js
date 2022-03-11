import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />
}

export default ProtectedRoute
