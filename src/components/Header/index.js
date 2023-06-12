import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <Link to="/" className="nav-link">
        <button className="website-logo-btn" type="button">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </button>
      </Link>
      <ul className="list-container">
        <Link to="/" className="nav-link">
          <li className="list">Home</li>
        </Link>
        <Link to="/jobs" className="nav-link">
          <li className="list">Jobs</li>
        </Link>
      </ul>
      <div className="log-out-button-container">
        <button onClick={onClickLogOut} className="logout-btn" type="button">
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
