import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newContactAPI, updateContactAPI } from '../actions'

class ContactForm extends Component {
  state = {
    submitted: false,
    fullname: this.props.contact.fullname || '',
    title: this.props.contact.title || '',
    companyName: this.props.contact.companyName || '',
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
        companyId: this.props.companyNames[this.state.companyName],
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
      companyName,
      cellNumber,
      officeNumber,
      email
    } = this.state
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
  const companyNames = {}
  state.companies.allIds.forEach(id => {
    companyNames[state.companies.byId[id].name] = state.companies.byId[id].id
  })

  let contact = {}
  const id = ownProps.match.params.id
  if (id && state.contacts.byId[id]) {
    contact = {
      ...state.contacts.byId[id],
      companyName: state.companies.byId[state.contacts.byId[id].companyId].name
    }
  }

  return {
    contact,
    companyNames
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
