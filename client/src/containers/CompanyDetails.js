import React from 'react';
import { connect } from 'react-redux';

const CompanyDetails = ({name, website}) => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <a href={website} target='_blank'>Website</a>
        <p>Add a description</p>
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
