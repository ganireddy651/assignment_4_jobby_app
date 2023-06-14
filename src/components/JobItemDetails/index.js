import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobItemDetails = props => {
  const {eachJob} = props
  const {
    id,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = eachJob
  return (
    <li>
      <div className="job-card">
        <div className="company-profile-container">
          <img
            className="company-logo"
            src={companyLogoUrl}
            alt="company logo"
          />
          <div className="job-title-container">
            <h1 className="job-title">{title}</h1>
            <p className="rating">
              <span className="span-text">
                <AiFillStar />
              </span>
              {rating}
            </p>
          </div>
        </div>
        <div className="job-details-container">
          <div className="location-container">
            <p className="location-emptype">{location}</p>
            <p className="location-emptype">{employmentType}</p>
          </div>
          <div>
            <p className="package-para">{packagePerAnnum}</p>
          </div>
        </div>
        <hr />
        <div>
          <h1 className="description-heading">Description</h1>
          <p className="JD">{jobDescription}</p>
        </div>
      </div>
    </li>
  )
}

export default JobItemDetails
