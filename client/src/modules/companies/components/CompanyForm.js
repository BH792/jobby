import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newCompanyAPI, updateCompanyAPI } from '../actions'
import { Redirect } from 'react-router-dom'
import * as selector from '../selectors'

class CompanyForm extends Component {
  state = {
    submitted: false,
    name: this.props.company.name || '',
    website: this.props.company.website || '',
    description: this.props.company.description || ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = () => {
    if (!this.state.submitted) {
      this.props.submitCompany({
        ...this.state,
        id: this.props.company.id
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
    const { name, website, description, submitted } = this.state
    const { loading, lastId, history } = this.props

    if (!loading && submitted) {
      if (lastId) {
        return <Redirect to={`/home/companies/${lastId}`} />
      } else {
        history.goBack()
      }
    }

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
    company: selector.getCompanyById(state, { companyId }),
    loading: selector.getLoading(state),
    lastId: selector.getLastId(state)
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
