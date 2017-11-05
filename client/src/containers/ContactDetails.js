import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ContactDetails = ({fullname, title, match }) => {
  return (
    <div>
      <div>
        <h2>{fullname}</h2>
        <p>{title}</p>
        <Link to={`${match.url}/edit`}>Edit</Link>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  return {
    ...state.contacts.byId[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {})(ContactDetails);
