import { combineReducers } from 'redux';
import users from '../modules/users';
import jobs from '../modules/jobs';
import contacts from '../modules/contacts';
import companies from '../modules/companies';
import touches from '../modules/touches';

const appReducer = combineReducers({
  user: users.reducer,
  jobs: jobs.reducer,
  companies: companies.reducer,
  contacts: contacts.reducer,
  touches: touches.reducer
})

export default (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }

  return appReducer(state, action)
}
