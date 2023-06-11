import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="app-container">
          <h1 className="home-main-heading">
            Find The Job That <br />
            Fits Your Life
          </h1>
          <p className="home-description">
            Millions of people are searching for jobs, salary Information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <div>
            <Link to="/jobs">
              <button className="find-job-btn" type="button">
                Find Jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
