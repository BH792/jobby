import React from 'react';
import JobStatus from './JobStatus';
import PinButton from './JobPinButton'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addJobToDashboard, removeJobFromDashboard } from '../actions'
import * as selector from '../selectors';
import { TouchItem } from '../../touches';
import { ButtonLink } from '../../shared';


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
        <PinButton isPinned={typeof order === 'number'} togglePin={handleBoard} />
        <p className='detail freetext'>{description}</p>
      </div>
      <div className='detail related-list'>
        <p className='detail subheader'>Touches:</p>
        <div className='detail interaction-list-container'>
          <ButtonLink path={`${match.url}/touch`} text='Add Touch'/>
          {interactions}
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
  const isPinned = typeof stateProps.order === 'number'
  return {
    ...ownProps,
    ...stateProps,
    handleBoardButton: isPinned ? dispatchProps.removeJobFromDashboard : dispatchProps.addJobToDashboard
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(JobDetails);
