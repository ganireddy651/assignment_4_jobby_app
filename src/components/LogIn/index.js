import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LogIn extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onSuccessHandler = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailureHandler = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onUsername = e => {
    this.setState({username: e.target.value})
  }

  onPassword = e => {
    this.setState({password: e.target.value})
  }

  submitHandler = async e => {
    e.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccessHandler(data.jwt_token)
    } else {
      this.onFailureHandler(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={this.submitHandler}>
            <div className="log-in-image-container">
              <img
                className="log-in-logo"
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
              />
            </div>
            <div className="user-input-container">
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <br />
              <input
                onChange={this.onUsername}
                value={username}
                className="input"
                id="username"
                placeholder="Username"
                type="text"
              />
            </div>
            <div className="password-input-container">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <br />
              <input
                onChange={this.onPassword}
                value={password}
                className="input"
                id="password"
                placeholder="Password"
                type="password"
              />
            </div>
            <button type="submit" className="log-in-btn">
              Login
            </button>
            {showSubmitError && <p className="errorMsg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LogIn
