import React from 'react';
import { TouchItem } from '../../touches/';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selector from '../selectors';

// TODO: fix circular dependency breaking the below import
// import touch from '../../touches/index.js';
// const { TouchItem } = touch.components;

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
    const interactions = touches.map(touch => (
      <Link to={`/home/touches/${touch.id}`} key={touch.id} className='router-link'>
        <TouchItem {...touch} />
      </Link>
    ))

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <p className='detail header'>{fullname}</p>
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
  return {
    ...selector.getContactWithCompany(state, { contactId }),
    touches: selector.getContactTouches(state, { contactId })
  }
}

export default connect(mapStateToProps, {})(ContactDetails);
