import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selector from '../selectors';

const CompanyDetails = ({
  name,
  website,
  description,
  match,
  contacts,
  jobs
}) => {
  // const contacts = contacts.map(contact => (
  //   <Link to={`/home/contacts/${contact.id}`} key={contact.id} className='router-link'>
  //     <JobItem {...contact} />
  //   </Link>
  // ))

  // const jobs = jobs.map(job => (
  //   <Link to={`/home/jobs/${job.id}`} key={job.id} className='router-link'>
  //     <ContactItem {...job} />
  //   </Link>
  // ))

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <p className='detail header'>{name}</p>
        <a href={website} target='_blank' className='detail subheader'>Website</a>
        <p className='detail freetext'>{description}</p>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const companyId = ownProps.match.params.id
  return {
    ...selector.getCompanyById(state, { companyId }),
    contacts: selector.getCompanyContacts(state, { companyId })
  }
}

export default connect(mapStateToProps, {})(CompanyDetails);
