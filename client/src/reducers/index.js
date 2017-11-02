import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import JobsReducer from './JobsReducer';
import CompaniesReducer from './CompaniesReducer';

export default combineReducers({
  user: UserReducer,
  jobs: JobsReducer,
  companies: CompaniesReducer
})
