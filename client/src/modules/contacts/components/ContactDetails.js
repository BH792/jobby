import React from 'react';
import { connect } from 'react-redux';

const ContactDetails = ({
  fullname,
  title,
  company,
  match,
  cellNumber,
  officeNumber,
  email,
  touches
}) => {
  const interactions = touches.map(touch => {
    const date = new Date(touch.date)
    return (
      <div className='detail interaction-container' key={touch.id}>
        <p className='detail interaction contact'>{touch.job || 'None'}</p>
        <p className='detail interaction type'>{touch.type}</p>
        <p className='detail interaction date'>{date.toDateString()}</p>
        <p className='detail interaction subject'>{touch.subject}</p>
      </div>
    )
  })

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <h2 className='detail header'>{fullname}</h2>
        <p className='detail subheader'>{title}</p>
        <p className='detail subheader'>{company}</p>
        <p>{cellNumber}</p>
        <p>{officeNumber}</p>
        <p>{email}</p>
      </div>
      <div className='detail related-list'>
        <p className='detail subheader'>Touches:</p>
        <div className='detail interaction-list-container'>
          {interactions}
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const contactId = ownProps.match.params.id
  const companyId = state.contacts.byId[contactId].companyId
  return {
    ...state.contacts.byId[contactId],
    company: state.companies.byId[companyId].name,
    touches: state.contacts.byId[contactId].touches.map(touchId => {
      let job;
      if (state.touches.byId[touchId].jobId) {
        job = state.jobs.byId[state.touches.byId[touchId].jobId].fullname
      }
      return {
        ...state.touches.byId[touchId],
        job
      }
    })
  }
}

export default connect(mapStateToProps, {})(ContactDetails);
