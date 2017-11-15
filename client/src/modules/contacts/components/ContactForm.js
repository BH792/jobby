import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newContactAPI, updateContactAPI } from '../actions'
import { sharedSelectors } from '../../shared'
import { Redirect } from 'react-router-dom'
import * as selector from '../selectors'

class ContactForm extends Component {
  state = {
    submitted: false,
    fullname: this.props.contact.fullname || '',
    title: this.props.contact.title || '',
    company: this.props.contact.company || '',
    cellNumber: this.props.contact.cellNumber || '',
    officeNumber: this.props.contact.officeNumber || '',
    email: this.props.contact.email || ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = () => {
    if (!this.state.submitted) {
      this.props.submitContact({
        ...this.state,
        companyId: this.props.companyNames[this.state.company],
        id: this.props.contact.id
      }, this.props.contact.companyId)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      submitted: true
    }, this.submit())
  }

  render() {
    const {
      fullname,
      title,
      company,
      cellNumber,
      officeNumber,
      email,
      submitted
    } = this.state

    const {
      loading,
      lastId,
      history
    } = this.props

    if (!loading && submitted) {
      if (lastId) {
        return <Redirect to={`/home/contacts/${lastId}`} />
      } else {
        history.goBack()
      }
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            type='text'
            name='fullname'
            value={fullname}
            onChange={this.handleChange}
            placeholder='Name'
            className='form input wide'
          />
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleChange}
            placeholder='Title'
            className='form input wide'
          />
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
          <input
            type='text'
            name='cellNumber'
            value={cellNumber}
            onChange={this.handleChange}
            placeholder='Cell Number'
            className='form input normal'
          />
          <input
            type='text'
            name='officeNumber'
            value={officeNumber}
            onChange={this.handleChange}
            placeholder='Office Number'
            className='form input normal'
          />
          <input
            type='text'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
            className='form input wide'
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
  const contactId = ownProps.match.params.id

  return {
    lastId: selector.getLastId(state),
    loading: selector.getLoading(state),
    contact: selector.getContactWithCompany(state, { contactId }),
    companyNames: sharedSelectors.mapCompanyNameToId(state)
  }
}

const mapDispatchToProps = {
  newContactAPI,
  updateContactAPI
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    submitContact: stateProps.contact.id ? dispatchProps.updateContactAPI : dispatchProps.newContactAPI
  }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ContactForm);
