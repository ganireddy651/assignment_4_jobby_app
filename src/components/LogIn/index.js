import './index.css'

const LogIn = () => (
  <div className="login-container">
    <div className="form-container">
      <form>
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
            className="input"
            id="password"
            placeholder="Password"
            type="text"
          />
        </div>
        <button type="submit" className="log-in-btn">
          Login
        </button>
      </form>
    </div>
  </div>
)
export default LogIn
