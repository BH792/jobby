import React from 'react';
import { connect } from 'react-redux';
import * as selector from '../selectors';
import { JobItem } from '../../jobs';
import { ContactItem } from '../../contacts';
import { Link } from 'react-router-dom';

const TouchDetails = ({
  subject,
  type,
  notes,
  contact,
  contactId,
  job,
  jobId,
  date,
  relatedContact,
  relatedJob
}) => {
  const touchDate = new Date(date)
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)

  let jobCard = null
  if (relatedJob.id) {
    jobCard = (
      <Link to={`/home/jobs/${relatedJob.id}`} className='router-link'>
        <JobItem {...relatedJob} />
      </Link>
    )
  }

  let contactCard = (
    <Link to={`/home/contacts/${relatedContact.id}`} className='router-link'>
      <ContactItem {...relatedContact} />
    </Link>
  )

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <p className='detail header'>{subject}</p>
        <p className='detail subheader'>{touchDate.toDateString()}</p>
        <p className='detail subheader'>{contact}</p>
        <p className='detail subheader'>{job || 'No Job'}</p>
        <p className='detail freetext'>{capitalizedType}</p>
        <p className='detail freetext'>{notes}</p>
      </div>
      <div className='detail related-list'>
        <p className='detail subheader'>Related:</p>
        <div className='detail interaction-list-container'>
          {contactCard}
          {jobCard}
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const touchId = ownProps.match.params.touchId

  return {
    ...selector.getTouchWithContactAndJob(state, { touchId }),
    relatedContact: selector.getRelatedContact(state, { touchId }),
    relatedJob: selector.getRelatedJob(state, { touchId })
  }
}

export default connect(mapStateToProps, {})(TouchDetails);
