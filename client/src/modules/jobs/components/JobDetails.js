import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const JobDetails = ({
  title,
  company,
  description,
  status,
  touches,
  match
}) => {
  const interactions = touches.map(touch => {
    return (
      <div>
        <p>{touch.contact}</p>
        <p>{touch.type}</p>
        <p>{touch.date.toLocaleDateString}</p>
        <p>{touch.subject}</p>
      </div>
    )
  })

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <p>{description}</p>
        <p>{status}</p>
        {interactions}
        <Link to={`${match.url}/edit`}>Edit</Link>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const jobId = ownProps.match.params.id
  const companyId = state.jobs.byId[jobId].companyId
  return {
    ...state.jobs.byId[jobId],
    company: state.companies.byId[companyId].name,
    touches: state.jobs.byId[jobId].touches.map(touchId => {
      return {
        ...state.touches.byId[touchId],
        contact: state.contacts.byId[state.touches.byId[touchId].contactId].fullname
      }
    })
  }
}

export default connect(mapStateToProps, {})(JobDetails);
