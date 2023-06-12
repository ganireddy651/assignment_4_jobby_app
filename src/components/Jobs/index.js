import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

class Jobs extends Component {
  state = {profileDetails: {}, isLoading: false}

  componentDidMount = () => {
    this.getProfileData()
  }

  getProfileData = async () => {
    this.setState({isLoading: true})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const profileDetails = fetchedData.profile_details
      const updatedData = {
        name: profileDetails.name,
        profileImageUrl: profileDetails.profile_image_url,
        shortBio: profileDetails.short_bio,
      }
      this.setState({profileDetails: updatedData, isLoading: false})
    }
  }

  renderProfileSection = () => {
    const {profileDetails, isLoading} = this.state
    const {profileImageUrl, name, shortBio} = profileDetails
    return (
      <div className="sidebar-container">
        <div className="profile-container">
          {isLoading ? (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          ) : (
            <>
              <img src={profileImageUrl} alt={name} />
              <h1 className="candidate-name">{name}</h1>
              <p className="candidate-bio">{shortBio}</p>
            </>
          )}
        </div>
        <hr />
        {/* <TypeOfEmployement /> */}
        <div className="employment-type-container">
          <h1 className="employment-type">Type of Employment</h1>
          <div className="checkbox-container">
            <div className="container">
              <input className="checkbox" id="fulltime" type="checkbox" />
              <label className="checkbox-label" htmlFor="fulltime">
                Full Time
              </label>
            </div>
            <div className="container">
              <input className="checkbox" id="parttime" type="checkbox" />
              <label className="checkbox-label" htmlFor="parttime">
                Part Time
              </label>
            </div>
            <div className="container">
              <input className="checkbox" id="freelance" type="checkbox" />
              <label className="checkbox-label" htmlFor="freelance">
                Freelance
              </label>
            </div>
            <div className="container">
              <input className="checkbox" id="internship" type="checkbox" />
              <label className="checkbox-label" htmlFor="internship">
                Internship
              </label>
            </div>
          </div>
        </div>
        <hr />
        {/* <SalaryRange /> */}
        <div className="employment-type-container">
          <h1 className="employment-type">Salary Range</h1>
          <div className="checkbox-container">
            <div className="container">
              <input
                className="checkbox"
                name="salary"
                id="tenLPA"
                type="radio"
              />
              <label className="checkbox-label" htmlFor="tenLPA">
                10 LPA and above
              </label>
            </div>
            <div className="container">
              <input
                className="checkbox"
                name="salary"
                id="twentyLPA"
                type="radio"
              />
              <label className="checkbox-label" htmlFor="twentyLPA">
                20 LPA and above
              </label>
            </div>
            <div className="container">
              <input
                className="checkbox"
                name="salary"
                id="thirtyLPA"
                type="radio"
              />
              <label className="checkbox-label" htmlFor="thirtyLPA">
                30 LPA and above
              </label>
            </div>
            <div className="container">
              <input
                className="checkbox"
                name="salary"
                id="fortyLPA"
                type="radio"
              />
              <label className="checkbox-label" htmlFor="fulltime">
                40 LPA and above
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <div className="jobs-container">{this.renderProfileSection()}</div>
      </>
    )
  }
}
export default Jobs
