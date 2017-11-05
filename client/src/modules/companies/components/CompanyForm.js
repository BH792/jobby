import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newCompanyAPI, updateCompanyAPI } from '../actions'
// import '../styles/Login.css'

class CompanyForm extends Component {
  state = {
    name: this.props.company.name || '',
    website: this.props.company.website || ''
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
    const { name, website } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='Form'>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            placeholder='Name'
          />
          <br/>
          <input
            type='text'
            name='website'
            value={website}
            onChange={this.handleChange}
            placeholder='Website'
          />
          <br/>

          <input type='submit' />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let company = {}
  const id = ownProps.match.params.id
  if (id && state.companies.byId[id]) {
    company = {
      ...state.companies.byId[id]
    }
  }

  return {
    company
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
