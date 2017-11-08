import React, { Component } from 'react';
import itemLister from '../../shared/Lister';
import ContactItem from './ContactItem';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { fetchContactsAPI } from '../actions';

import { LoginRedirect } from '../../../containers/hocs/LoginRedirector';

class ContactContent extends Component {
  // componentDidMount() {
  //   this.props.fetchContactsAPI()
  // }

  render() {
    const { contacts, match } = this.props
    let ContactList = itemLister(ContactItem, contacts, match)
    return (
      <div className='content container'>
        <Link to={`${match.url}/new`}>Add New Contact</Link>
        <Link to={`${match.url}`}>See All Contacts</Link>
        <Switch>
          <Route exact path={`${match.url}/new`} component={ContactForm} />
          <Route exact path={`${match.url}/:id`} component={ContactDetails} />
          <Route path={`${match.url}/:id/edit`} component={ContactForm} />
        </Switch>
        <Route exact path={`${match.url}`} component={ContactList}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const contacts = state.contacts.allIds.map(contactId => {
    return {
      ...state.contacts.byId[contactId],
      company: state.companies.byId[state.contacts.byId[contactId].companyId].name
    }
  })
  return {
    contacts
  }
}

export default LoginRedirect(connect(mapStateToProps, { fetchContactsAPI })(ContactContent))
