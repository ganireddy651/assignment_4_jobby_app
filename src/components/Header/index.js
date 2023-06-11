import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <button className="website-logo-btn" type="button">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
    </button>
    <ul className="list-container">
      <Link to="/" className="nav-link">
        <li className="list">Home</li>
      </Link>
      <Link to="/jobs" className="nav-link">
        <li className="list">Jobs</li>
      </Link>
    </ul>
    <div className="log-out-button-container">
      <button className="logout-btn" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
