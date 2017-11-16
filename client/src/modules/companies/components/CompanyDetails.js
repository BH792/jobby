import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selector from '../selectors';
import { JobItem } from '../../jobs';
import { ContactItem } from '../../contacts';

const CompanyDetails = ({
  name,
  website,
  description,
  match,
  contacts,
  jobs
}) => {
  const contactList = contacts.map(contact => (
    <Link to={`/home/contacts/${contact.id}`} key={contact.id} className='router-link'>
      <ContactItem {...contact} />
    </Link>
  ))

  const jobList = jobs.map(job => (
    <Link to={`/home/jobs/${job.id}`} key={job.id} className='router-link'>
      <JobItem {...job} />
    </Link>
  ))

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <p className='detail header'>{name}</p>
        <a href={website} target='_blank' className='detail subheader'>Website</a>
        <p className='detail freetext'>{description}</p>
      </div>
      <div className='detail related-list'>
        <p className='detail subheader'>Contacts:</p>
        <div className='detail interaction-list-container'>
          {contactList}
        </div>
      </div>
      <div className='detail related-list'>
        <p className='detail subheader'>Jobs:</p>
        <div className='detail interaction-list-container'>
          {jobList}
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const companyId = ownProps.match.params.id
  return {
    ...selector.getCompanyById(state, { companyId }),
    contacts: selector.getCompanyContacts(state, { companyId }),
    jobs: selector.getCompanyJobs(state, { companyId })
  }
}

export default connect(mapStateToProps, {})(CompanyDetails);
