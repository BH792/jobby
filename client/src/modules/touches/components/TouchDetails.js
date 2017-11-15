import React from 'react';
import { connect } from 'react-redux';
import * as selector from '../selectors';

const JobDetails = ({
  subject,
  type,
  notes,
  contact,
  contactId,
  job,
  jobId,
  date,
  match
}) => {
  // const interactions = touches.map(touch => <Touch touch={touch} key={touch.id}/>)
  const touchDate = new Date(date)
  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <p className='detail header'>{subject}</p>
        <p className='detail subheader'>{touchDate.toDateString()}</p>
        <p className='detail subheader'>{contact}</p>
        <p className='detail subheader'>{job || 'No Job'}</p>
        <p className='detail freetext'>{notes}</p>
      </div>
      <div className='detail related-list'>
        <p className='detail subheader'>Touches:</p>
        <div className='detail interaction-list-container'>
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const touchId = ownProps.match.params.touchId

  return {
    ...selector.getTouchWithContactAndJob(state, { touchId })
  }
}

export default connect(mapStateToProps, {})(JobDetails);
