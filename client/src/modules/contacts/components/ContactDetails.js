import React from 'react';
import { connect } from 'react-redux';
import { Touch } from '../../shared';
import { Link } from 'react-router-dom'

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
    const interactions = touches.map(touch => <Touch touch={touch} key={touch.id}/>)

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <h2 className='detail header'>{fullname}</h2>
        <p className='detail subheader'>{title}</p>
        <p className='detail subheader'>{company}</p>
        <p className='detail number'>Cell:   {cellNumber}</p>
        <p className='detail number'>Work:  {officeNumber}</p>
        <p className='detail email'>Email: {email}</p>
      </div>
      <div className='detail related-list'>
        <p className='detail subheader'>Touches:</p>
        <div className='detail interaction-list-container'>
          {interactions}
        </div>
        <Link to={`${match.url}/touch`}>
          <div
            className='detail interaction-container'
            style={{
              borderColor: 'orange',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
              Add Touch Point
            </div>
        </Link>
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
