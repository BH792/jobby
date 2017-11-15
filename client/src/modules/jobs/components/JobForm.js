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
    company: this.props.job.company || ''
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
        companyId: this.props.companyNames[this.state.company],
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
    const { title, description, status, company, submitted } = this.state
    const { loading, lastId, match, history } = this.props

    if (!loading && submitted) {
      if (lastId) {
        return <Redirect to={`/home/jobs/${lastId}`} />
      } else {
        history.goBack()
      }
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
            name='company'
            value={company}
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
            className={`form submit normal ${this.state.submitted ? 'disabled' : ''}`}
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
  const jobId = ownProps.match.params.id
  return {
    job: selector.getJobWithCompany(state, { jobId }),
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
