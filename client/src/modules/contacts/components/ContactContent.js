import React, { Component } from 'react';
import itemLister from '../../shared/Lister';
import ContactItem from './ContactItem';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ContentHeader, SortBy } from '../../shared'
import { changeSort } from '../actions'
import { TouchForm } from '../../touches'
import * as selector from '../selectors'

class ContactContent extends Component {
  render() {
    const { contacts, match, changeSort, sortBy } = this.props
    let ContactList = itemLister(ContactItem, contacts, match)
    return (
      <div className='content container'>
        <ContentHeader match={match} type={'Contact'}>
          <Route exact path={`${match.url}`} render={(props) => (
            <SortBy
              {...props}
              changeSort={changeSort}
              selectedOption={sortBy}
            />
          )}/>
        </ContentHeader>
        <Switch>
          <Route exact path={`${match.url}/new`} component={ContactForm} />
          <Route exact path={`${match.url}/:id`} component={ContactDetails} />
          <Route path={`${match.url}/:id/edit`} component={ContactForm} />
          <Route path={`${match.url}/:id/touch`} component={TouchForm} />
        </Switch>
        <Route exact path={`${match.url}`} component={ContactList}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: selector.getSortedContactsWithCompany(state),
    sortBy: selector.getSortBy(state)
  }
}

export default connect(mapStateToProps, { changeSort })(ContactContent);
