import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { newTouchAPI, updateTouchAPI } from '../actions'
import * as selector from '../selectors';

class TouchForm extends Component {
  constructor(props) {
    super(props)

    const {
      touch,
      defaultContact,
      defaultJob,
      contactNames,
      jobNames
    } = this.props

    const dateTime = touch.date ? new Date(touch.date).toISOString().substr(0, 10) : null
    const enableContact = !Object.keys(contactNames).length || touch.id
    const enableJob = !Object.keys(jobNames).length || touch.id

    this.state = {
      submitted: false,
      contact: defaultContact[0] ||touch.contact || '',
      job: defaultJob[0] || touch.job || '',
      date: dateTime || '',
      subject: touch.subject || '',
      notes: touch.notes || '',
      type: touch.type || '',
      enableContact,
      enableJob
    }
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
        id: this.props.touch.id,
        jobId: this.props.jobNames[this.state.job] || this.props.defaultJob[1] || this.props.touch.jobId,
        contactId: this.props.contactNames[this.state.contact] || this.props.defaultContact[1] || this.props.touch.contactId
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
    const { loading, lastId, history, touch } = this.props

    if (!loading && submitted) {
      if (lastId) {
        return <Redirect to={`/home/touches/${lastId}`} />
      } else {
        history.goBack()
      }
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            list='contacts'
            name='contact'
            value={contact}
            onChange={this.handleChange}
            placeholder='Contact'
            disabled={this.state.enableContact}
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
            disabled={this.state.enableJob}
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
  const id = ownProps.match.params.id
  const touchId = ownProps.match.params.touchId
  const job = /jobs/.test(ownProps.match.url)
  const contact = /contacts/.test(ownProps.match.url)

  return {
    loading: selector.getLoading(state),
    lastId: selector.getLastId(state),
    jobNames: job || touchId ? {} : selector.mapJobNames(state),
    contactNames: contact || touchId ? {} : selector.mapContactNames(state),
    defaultJob: job ? selector.getJob(state, {jobId: id}) : '',
    defaultContact: contact ? selector.getContact(state, {contactId: id}) : '',
    touch: touchId ? selector.getTouchWithContactAndJob(state, { touchId }) : {}
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
    submitTouch: ownProps.match.params.touchId ? dispatchProps.updateTouchAPI : dispatchProps.newTouchAPI
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TouchForm);
