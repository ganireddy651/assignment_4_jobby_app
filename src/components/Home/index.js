import {Link, Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookie.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="app-container">
        <h1 className="home-main-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="home-description">
          Millions of people are searching for jobs, salary Information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <div>
          <Link to="/jobs">
            <button className="find-job-btn" type="button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
