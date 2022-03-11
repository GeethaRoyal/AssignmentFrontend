import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorText: '', showErrorMsg: false}

  usernameChanged = e => {
    this.setState({username: e.target.value})
  }

  passwordChanged = e => {
    this.setState({password: e.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  authenticationPart = async () => {
    const {username, password} = this.state
    const obj = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(obj),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({showErrorMsg: true, errorText: data.error_msg})
    }
  }

  formSubmitted = async e => {
    e.preventDefault()
    this.authenticationPart()
  }

  renderForm = () => {
    const {username, password, errorText, showErrorMsg} = this.state
    return (
      <form className="form-container" onSubmit={this.formSubmitted}>
        <div className="form-inp-container">
          <label className="label" htmlFor="username" required="required">
            USERNAME
          </label>
          <input
            placeholder="Username"
            className="inp"
            value={username}
            type="text"
            id="username"
            required
            onChange={this.usernameChanged}
          />
        </div>
        <div className="form-inp-container">
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            placeholder="Password"
            className="inp"
            value={password}
            type="password"
            id="password"
            required
            onChange={this.passwordChanged}
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
        {showErrorMsg && <p className="error">{errorText}</p>}
      </form>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <h2>Extract Data</h2>
        {this.renderForm()}
      </div>
    )
  }
}

export default LoginForm
