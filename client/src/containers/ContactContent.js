import React, { Component } from 'react';
import itemLister from '../components/hocs/Lister';
import ContactItem from '../components/ContactItem';
import ContactDetails from '../containers/ContactDetails';
import ContactForm from '../containers/ContactForm';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { fetchContacts } from '../actions/ContactActions';

class ContactContent extends Component {
  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    const { contacts, match } = this.props
    let ContactList = itemLister(ContactItem, contacts, match)
    return (
      <div>
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
//
// const ContactContent = ({contacts, match}) => {
//   let ContactList = itemLister(ContactItem, contacts, match)
//   return (
//     <div>
//       <Link to={`${match.url}/new`}>Add New Contact</Link>
//       <Link to={`${match.url}`}>See All Contacts</Link>
//       <Switch>
//         <Route exact path={`${match.url}/new`} component={ContactForm} />
//         <Route exact path={`${match.url}/:id`} component={ContactDetails} />
//         <Route path={`${match.url}/:id/edit`} component={ContactForm} />
//       </Switch>
//       <Route exact path={`${match.url}`} component={ContactList}/>
//     </div>
//   )
// }

function mapStateToProps(state) {
  return {
    contacts: state.contacts.allIds.map(id => state.contacts.byId[id])
  }
}

export default connect(mapStateToProps, { fetchContacts })(ContactContent)
