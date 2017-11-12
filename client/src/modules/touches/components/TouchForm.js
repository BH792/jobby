import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import { newTouchAPI, updateTouchAPI } from '../actions'
// import * as selector from '../selectors';

class TouchForm extends Component {
  state = {
    submitted: false,
    contact: this.props.touch.contact || '',
    job: this.props.touch.job || '',
    date: this.props.touch.job || '',
    subject: this.props.touch.subject || '',
    notes: this.props.touch.notes || '',
    type: this.props.touch.type || ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = () => {
    if (!this.state.submitted) {
      this.props.submitTouch({
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
    const { contact, job, type, date, submitted, subject, notes } = this.state
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
            name='contact'
            value={contact}
            onChange={this.handleChange}
            placeholder='Contact'
            className='form input wide'
          />
          <input
            type='text'
            name='job'
            value={job}
            onChange={this.handleChange}
            placeholder='Job'
            className='form input wide'
          />
          <input
            type='text'
            name='date'
            value={date}
            onChange={this.handleChange}
            placeholder='Date'
            className='form input wide'
          />
          <select
            name='type'
            value={type}
            onChange={this.handleChange}
            className='form select wide'
            >
              <option value='email'>Email</option>
              <option value='in-person'>In-person</option>
              <option value='phone'>Phone</option>
              <option value='videochat'>Videochat</option>
          </select>
          <input
            type='text'
            name='subject'
            value={subject}
            onChange={this.handleChange}
            placeholder='Subject'
            className='form input wide'
          />
          <textarea
            name='notes'
            value={notes}
            onChange={this.handleChange}
            placeholder='Notes'
            className='form textarea wide'
          />
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

TouchForm.defaultProps = {
  touch: {}
}
// function mapStateToProps(state, ownProps) {
//   const jobId = ownProps.match.params.id
//   return {
//
//   }
// }
//
// const mapDispatchToProps = {
//   newTouchAPI,
//   updateTouchAPI
// }
//
// function mergeProps(stateProps, dispatchProps, ownProps) {
//   return {
//     ...ownProps,
//     ...stateProps,
//     submitTouch: stateProps.job.id ? dispatchProps.updateTouchAPI : dispatchProps.newTouchAPI
//   }
// }

export default TouchForm;
