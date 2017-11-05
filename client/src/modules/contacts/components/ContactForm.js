import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newContactAPI, updateContactAPI } from '../actions'
// import '../styles/Login.css'

class ContactForm extends Component {
  state = {
    fullname: this.props.contact.fullname || '',
    title: this.props.contact.title || ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitContact({
      ...this.state,
      id: this.props.contact.id
    })
  }

  render() {
    const { fullname, title } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='Form'>
          <input
            type='text'
            name='fullname'
            value={fullname}
            onChange={this.handleChange}
            placeholder='Name'
          />
          <br/>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleChange}
            placeholder='Title'
          />
          <br/>

          <input type='submit' />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let contact = {}
  const id = ownProps.match.params.id
  if (id && state.contacts.byId[id]) {
    contact = {
      ...state.contacts.byId[id]
    }
  }

  return {
    contact
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
