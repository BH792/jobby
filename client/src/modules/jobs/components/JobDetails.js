import React from 'react';
import JobStatus from './JobStatus';
import { connect } from 'react-redux';
import touches from '../../touches';
import { Link } from 'react-router-dom';
import { addJobToDashboard, removeJobFromDashboard } from '../actions'
import * as selector from '../selectors';

const TouchItem = touches.TouchItem

const JobDetails = ({
  id,
  title,
  company,
  description,
  status,
  order,
  handleBoardButton,
  touches,
  match
}) => {
  const interactions = touches.map(touch => (
    <Link to={`/home/touches/${touch.id}`} key={touch.id} className='router-link'>
      <TouchItem {...touch}/>
    </Link>
  ))

  const handleBoard = () => {
    handleBoardButton(id)
  }

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <p className='detail header'>{title}</p>
        <p className='detail subheader'>{company}</p>
        <JobStatus status={status} />
        <button onClick={handleBoard} className='form submit normal'>
          {order ? 'Unpin' : 'Pin to Board'}
        </button>
        <p className='detail freetext'>{description}</p>
      </div>
      <div className='detail related-list'>
        <p className='detail subheader'>Touches:</p>
        <div className='detail interaction-list-container'>
          {interactions}
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
    </div>
  )
};

function mapStateToProps(state, ownProps) {
  const jobId = ownProps.match.params.id

  return {
    ...selector.getJobWithCompany(state, { jobId }),
    touches: selector.getJobTouches(state, { jobId })
  }
}

const mapDispatchToProps = {
  addJobToDashboard,
  removeJobFromDashboard
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    handleBoardButton: stateProps.order ? dispatchProps.removeJobFromDashboard : dispatchProps.addJobToDashboard
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(JobDetails);
