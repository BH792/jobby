import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import JobsReducer from './JobsReducer';
import CompaniesReducer from './CompaniesReducer';
import ContactsReducer from './ContactsReducer';

export default combineReducers({
  user: UserReducer,
  jobs: JobsReducer,
  companies: CompaniesReducer,
  contacts: ContactsReducer
})
