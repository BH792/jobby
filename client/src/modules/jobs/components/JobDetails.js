import React from 'react';
import JobStatus from './JobStatus';
import { connect } from 'react-redux';
import { Touch } from '../../shared';
import { Link } from 'react-router-dom'
import * as selector from '../selectors';

const JobDetails = ({
  title,
  company,
  description,
  status,
  touches,
  match
}) => {
  const interactions = touches.map(touch => <Touch touch={touch} key={touch.id}/>)

  return (
    <div className='detail main'>
      <div className='detail item-info'>
        <p className='detail header'>{title}</p>
        <p className='detail subheader'>{company}</p>
        <JobStatus status={status} />
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

export default connect(mapStateToProps, {})(JobDetails);
