import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as selector from '../selectors'
import TouchItem from '../../touches/components/TouchItem';

const style = {
  display: 'inline',
  width: '300px',
  marginRight: '30px'
}

const flexDiv = {
  margin: '10px',
  display: 'flex',
  alignItems: 'center'
}

const GoalCheckList = ({
  jobCount,
  companyCount,
  contactCount,
  touchCount,
  upcomingTouches
}) => {
  return (
    <div style={style}>
      <h3>This Week:</h3>
      <div style={flexDiv}>
        <CheckBox done={jobCount >= 5} />
        Add 5 Jobs, {jobCount || 0}/5
      </div>
      <div style={flexDiv}>
        <CheckBox done={companyCount >= 2} />
        Research 2 Companies, {companyCount || 0}/2
      </div>
      <div style={flexDiv}>
        <CheckBox done={contactCount >= 2} />
        Find 2 Contacts, {contactCount || 0}/2
      </div>
      <div style={flexDiv}>
        <CheckBox done={touchCount >= 5} />
        Make 5 Touches, {touchCount || 0}/5
      </div>
      <h3>Upcoming Touches</h3>
      {upcomingTouches.slice(0,5).map(touch => {
        return (
          <Link to={`/home/touches/${touch.id}`} key={touch.id} className='router-link'>
            <TouchItem {...touch} />
          </Link>
        )
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    jobCount: selector.getJobCount(state),
    companyCount: selector.getCompanyCount(state),
    contactCount: selector.getContactCount(state),
    touchCount: selector.getTouchCount(state),
    upcomingTouches: selector.getOrderedUpcomingTouches(state)
  }
}

const CheckBox = ({done}) => {
  if (done) {
    return (
      <svg fill="#00c853" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  } else {
    return (
      <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    )
  }
}

export default connect(mapStateToProps, {})(GoalCheckList);
