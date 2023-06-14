import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import JobItemDetails from '../JobItemDetails'
import Header from '../Header'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class Jobs extends Component {
  state = {profileDetails: {}, jobsData: [], isLoading: false}

  componentDidMount = () => {
    this.getProfileData()
    this.getJobsData()
  }

  getJobsData = async () => {
    this.setState({isLoading: true})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/jobs'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const jobDetails = fetchedData.jobs
      const convertedData = jobDetails.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      this.setState({
        jobsData: convertedData,
        isLoading: false,
      })
    }
  }

  renderJobsData = () => {
    const {jobsData, isLoading} = this.state
    return isLoading ? (
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    ) : (
      <ul className="job-list-container">
        {jobsData.map(eachJob => (
          <JobItemDetails eachJob={eachJob} key={eachJob.id} />
        ))}
      </ul>
    )
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
              <img src={profileImageUrl} alt="profile" />
              <h1 className="candidate-name">{name}</h1>
              <p className="candidate-bio">{shortBio}</p>
            </>
          )}
        </div>
        <hr />

        <div className="employment-type-container">
          <h1 className="employment-type">Type of Employment </h1>
          <div className="checkbox-container">
            <div className="container">
              <input className="checkbox" id="fulltime" type="checkbox" />
              <label className="checkbox-label" htmlFor="fulltime">
                {employmentTypesList[0].label}
              </label>
            </div>
            <div className="container">
              <input className="checkbox" id="parttime" type="checkbox" />
              <label className="checkbox-label" htmlFor="parttime">
                {employmentTypesList[1].label}
              </label>
            </div>
            <div className="container">
              <input className="checkbox" id="freelance" type="checkbox" />
              <label className="checkbox-label" htmlFor="freelance">
                {employmentTypesList[2].label}
              </label>
            </div>
            <div className="container">
              <input className="checkbox" id="internship" type="checkbox" />
              <label className="checkbox-label" htmlFor="internship">
                {employmentTypesList[3].label}
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
                {salaryRangesList[0].label}
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
                {salaryRangesList[1].label}
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
                {salaryRangesList[2].label}
              </label>
            </div>
            <div className="container">
              <input
                className="checkbox"
                name="salary"
                id="fortyLPA"
                type="radio"
              />
              <label className="checkbox-label" htmlFor="fortyLPA">
                {salaryRangesList[3].label}
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
        <div className="jobs-container">
          {this.renderProfileSection()}
          <div className="job-item-details-container">
            <div className="search-input-container">
              <input
                placeholder="Search"
                className="search-input"
                type="search"
              />
              <button
                className="search-icon"
                type="button"
                data-testid="searchButton"
              >
                <BsSearch />
              </button>
            </div>
            {this.renderJobsData()}
          </div>
        </div>
      </>
    )
  }
}
export default Jobs
