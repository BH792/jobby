import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchResults } from '../actions'
import * as selector from '../selectors'

import SearchResultsSection from './SearchResultsSection'

class SearchContent extends Component {
  state = {
    value: this.props.searchTerm || ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getSearchResults(this.state.value)
  }

  render() {
    const { jobs, contacts, companies, touches } = this.props

    let message = null;
    if (
      this.props.searchTerm &&
      !jobs.length &&
      !contacts.length &&
      !companies.length &&
      !touches.length) {
      message = <h4>No Results Found</h4>
    }

    return (
      <div className='content container'>
        <form
          className='form'
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            className='form input wide'
            style={{ display: 'inline' }}
          />
          <button
            className='form submit normal'
            style={{ display: 'inline' }}
          >
            Search
          </button>
        </form>
        <div>
          {message}
          <SearchResultsSection section={'Jobs'} data={jobs}/>
          <SearchResultsSection section={'Contacts'} data={contacts}/>
          <SearchResultsSection section={'Companies'} data={companies}/>
          <SearchResultsSection section={'Touches'} data={touches}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: selector.getSearchTerm(state),
    jobs: selector.mapJobResults(state),
    contacts: selector.mapContactResults(state),
    companies: selector.mapCompanyResults(state),
    touches: selector.mapTouchResults(state)
  }
}

const mapDispatchToProps = {
  getSearchResults
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContent);
