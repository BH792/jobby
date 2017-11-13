import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { newTouchAPI, updateTouchAPI } from '../actions'
import * as selector from '../selectors';

class TouchForm extends Component {
  state = {
    submitted: false,
    contact: this.props.defaultContact[0] || '',
    job: this.props.defaultJob[0] || '',
    date: this.props.touch.job || '',
    subject: this.props.touch.subject || '',
    notes: this.props.touch.notes || '',
    type: this.props.touch.type || '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = () => {
    if (!this.state.submitted) {
      console.log('submitting');
      this.props.submitTouch({
        ...this.state,
        jobId: this.props.jobNames[this.state.job] || this.props.defaultJob[1],
        contactId: this.props.contactNames[this.state.contact] || this.props.defaultContact[1]
      })
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
    const { loading, lastId, match, history } = this.props

    // if (!loading && submitted) {
    //   if (/jobs/.test(match.url) || /contacts/.test(match.url)) {
    //     history.goBack()
    //   }
    // }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            list='contacts'
            name='contact'
            value={contact}
            onChange={this.handleChange}
            placeholder='Contact'
            disabled={!Object.keys(this.props.contactNames).length}
            className='form input wide'
          />
          <datalist id='contacts'>
            {Object.keys(this.props.contactNames).map(contact => {
              return (
                <option
                  value={contact}
                  key={this.props.contactNames[contact]}
                />
              )
            })}
          </datalist>
          <input
            list='jobs'
            name='job'
            value={job}
            onChange={this.handleChange}
            placeholder='Job'
            disabled={!Object.keys(this.props.jobNames).length}
            className='form input wide'
          />
          <datalist id='jobs'>
            {Object.keys(this.props.jobNames).map(job => {
              return (
                <option
                  value={job}
                  key={this.props.jobNames[job]}
                />
              )
            })}
          </datalist>
          <input
            type='date'
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

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id
  const job = /jobs/.test(ownProps.match.url)
  const contact = /contacts/.test(ownProps.match.url)

  return {
    jobNames: job ? {} : selector.mapJobNames(state),
    contactNames: contact ? {} : selector.mapContactNames(state),
    defaultJob: job ? selector.getJob(state, {jobId: id}) : '',
    defaultContact: contact ? selector.getContact(state, {contactId: id}) : ''
  }
}

const mapDispatchToProps = {
  newTouchAPI,
  updateTouchAPI
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    submitTouch: stateProps.touchId ? dispatchProps.updateTouchAPI : dispatchProps.newTouchAPI
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TouchForm);
