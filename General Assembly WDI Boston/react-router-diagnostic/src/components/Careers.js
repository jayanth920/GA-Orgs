import React from 'react'

const Careers = props => {
  return (
    <React.Fragment>
      <h2>Work for us!</h2>
      <ul> Here are the available positions in our company:
        {props.jobOpenings.map(job => (
          <li key={job}>{job}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Careers
