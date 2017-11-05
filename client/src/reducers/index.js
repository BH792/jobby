import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
// import JobsReducer from './JobsReducer';
// import CompaniesReducer from './CompaniesReducer';
// import ContactsReducer from './ContactsReducer';
import jobs from '../modules/jobs';
import contacts from '../modules/contacts';
import companies from '../modules/companies';

export default combineReducers({
  user: UserReducer,
  jobs: jobs.reducer,
  companies: companies.reducer,
  contacts: contacts.reducer
})
