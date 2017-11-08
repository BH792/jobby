import React from 'react';
import { connect } from 'react-redux';

const JobDetails = ({
  title,
  company,
  description,
  status,
  touches,
  match
}) => {
  const interactions = touches.map(touch => {
    const date = new Date(touch.date)
    return (
      <div className='detail interaction-container' key={touch.id}>
        <p className='detail interaction contact'>{touch.contact}</p>
        <p className='detail interaction type'>{touch.type}</p>
        <p className='detail interaction date'>{date.toDateString()}</p>
        <p className='detail interaction subject'>{touch.subject}</p>
      </div>
    )
  })

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <p className='detail header'>{title}</p>
        <p className='detail subheader'>{company}</p>
        <p className='detail freetext'>{description}</p>
        <p className='detail freetext'>{status}</p>
      </div>
      <div className='detail related-list'>
        <div className='detail interaction-list-container'>
          {interactions}
        </div>
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
