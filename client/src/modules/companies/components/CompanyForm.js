import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newCompanyAPI, updateCompanyAPI } from '../actions'
import * as selector from '../selectors'

class CompanyForm extends Component {
  state = {
    name: this.props.company.name || '',
    website: this.props.company.website || '',
    description: this.props.company.description || ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitCompany({
      ...this.state,
      id: this.props.company.id
    })
  }

  render() {
    const { name, website, description } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            placeholder='Name'
            className='form input wide'
          />
          <input
            type='text'
            name='website'
            value={website}
            onChange={this.handleChange}
            placeholder='Website'
            className='form input wide'
          />
          <textarea
            name='description'
            value={description}
            onChange={this.handleChange}
            placeholder='Description'
            className='form textarea wide'
          />
          <button className='form submit normal'>Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const companyId = ownProps.match.params.id
  return {
    company: selector.getCompanyById(state, { companyId })
  }
}

const mapDispatchToProps = {
  newCompanyAPI,
  updateCompanyAPI
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    submitCompany: stateProps.company.id ? dispatchProps.updateCompanyAPI : dispatchProps.newCompanyAPI
  }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CompanyForm);
