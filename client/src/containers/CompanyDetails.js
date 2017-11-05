import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CompanyDetails = ({name, website, match }) => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <a href={website} target='_blank'>Website</a>
        <p>Add a description</p>
        <Link to={`${match.url}/edit`}>Edit</Link>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  return {
    ...state.companies.byId[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {})(CompanyDetails);
