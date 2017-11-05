import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const JobDetails = ({title, company, description, match}) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <p>{description}</p>
        <Link to={`${match.url}/edit`}>Edit</Link>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const companyId = state.jobs.byId[ownProps.match.params.id].companyId

  return {
    ...state.jobs.byId[ownProps.match.params.id],
    company: state.companies.byId[companyId].name
  }
}

export default connect(mapStateToProps, {})(JobDetails);
