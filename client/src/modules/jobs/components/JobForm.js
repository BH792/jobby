import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { newJobAPI, updateJobAPI } from '../actions'
import * as selector from '../selectors';

class JobForm extends Component {
  state = {
    submitted: false,
    title: this.props.job.title || '',
    description: this.props.job.description || '',
    status: this.props.job.status || 'watching',
    companyName: this.props.job.companyName || ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = () => {
    if (!this.state.submitted) {
      this.props.submitJob({
        ...this.state,
        companyId: this.props.companyNames[this.state.companyName],
        id: this.props.job.id
      }, this.props.job.companyId)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      submitted: true
    }, this.submit())
  }

  render() {
    const { title, description, status, companyName, submitted } = this.state
    const { loading, lastId, match } = this.props

    if (!loading && submitted) {
      const path = `${match.path.split('/').slice(0, 3).join('/')}/${lastId || ''}`
      return <Redirect to={path} />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleChange}
            placeholder='Title'
            className='form input wide'
          />
          <textarea
            name='description'
            value={description}
            onChange={this.handleChange}
            placeholder='Description'
            className='form textarea wide'
          />
          <select
            name='status'
            value={status}
            onChange={this.handleChange}
            className='form select wide'
          >
            <option value='watching'>Watching</option>
            <option value='applied'>Applied</option>
            <option value='interviewed'>Interviewed</option>
            <option value='offered'>Offered</option>
          </select>
          <input
            list='companies'
            name='companyName'
            value={companyName}
            onChange={this.handleChange}
            className='form input wide'
          />
          <datalist id='companies'>
            {Object.keys(this.props.companyNames).map(company => {
              return (
                <option
                  value={company}
                  key={this.props.companyNames[company]}
                />
              )
            })}
          </datalist>
          <button
            className={`button primary normal ${this.state.submitted ? 'disabled' : ''}`}
            disabled={this.state.submitted}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let job = {}
  const jobId = ownProps.match.params.id
  if (jobId && selector.getJob(state, { jobId })) {
    job = {
      ...selector.getJob(state, { jobId }),
      companyName: selector.getJobCompanyName(state, { jobId }),
    }
  }

  return {
    job,
    companyNames: selector.getCompanyNames(state),
    loading: selector.getLoading(state),
    lastId: selector.getLastId(state)
  }
}

const mapDispatchToProps = {
  newJobAPI,
  updateJobAPI
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    submitJob: stateProps.job.id ? dispatchProps.updateJobAPI : dispatchProps.newJobAPI
  }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(JobForm);
