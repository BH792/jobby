import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ContactDetails = ({
  fullname,
  title,
  company,
  match,
  cellNumber,
  officeNumber,
  email
}) => {
  return (
    <div>
      <div>
        <h2>{fullname}</h2>
        <p>{title}</p>
        <p>{company}</p>
        <p>{cellNumber}</p>
        <p>{officeNumber}</p>
        <p>{email}</p>
        <Link to={`${match.url}/edit`}>Edit</Link>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const contactId = ownProps.match.params.id
  const companyId = state.contacts.byId[contactId].companyId
  return {
    ...state.contacts.byId[contactId],
    company: state.companies.byId[companyId].name
  }
}

export default connect(mapStateToProps, {})(ContactDetails);
