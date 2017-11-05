import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newJobAPI, updateJobAPI } from '../actions'
// import '../styles/Login.css'

class JobForm extends Component {
  state = {
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitJob({
      ...this.state,
      companyId: this.props.companyNames[this.state.companyName],
      id: this.props.job.id
    })
  }

  render() {
    const { title, description, status, companyName } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='Form'>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleChange}
            placeholder='Title'
          />
          <br/>
          <textarea
            rows='10'
            cols='50'
            name='description'
            value={description}
            onChange={this.handleChange}
            placeholder='Description'
          />
          <br/>
          <select
            name='status'
            value={status}
            onChange={this.handleChange}
          >
            <option value='watching'>Watching</option>
            <option value='applied'>Applied</option>
            <option value='interviewed'>Interviewed</option>
            <option value='offered'>Offered</option>
          </select>
          <br/>
          <input
            list='companies'
            name='companyName'
            value={companyName}
            onChange={this.handleChange}
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
          <br/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const companyNames = {}
  state.companies.allIds.forEach(id => {
    companyNames[state.companies.byId[id].name] = state.companies.byId[id].id
  })

  let job = {}
  const id = ownProps.match.params.id
  if (id && state.jobs.byId[id]) {
    job = {
      ...state.jobs.byId[id],
      companyName: state.companies.byId[state.jobs.byId[id].companyId].name
    }
  }

  return {
    job,
    companyNames
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
