import React, { Component } from 'react';
import itemLister from '../../shared/Lister';
import ContactItem from './ContactItem';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ContentHeader } from '../../shared'

class ContactContent extends Component {
  render() {
    const { contacts, match } = this.props
    let ContactList = itemLister(ContactItem, contacts, match)
    return (
      <div className='content container'>
        <ContentHeader match={match} type={'Contact'}/>
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

export default connect(mapStateToProps, {})(ContactContent);
