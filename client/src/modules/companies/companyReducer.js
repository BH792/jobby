import * as t from './actionTypes';

export default (
  state = {
    id: null,
    name: null,
    description: null,
    userId: null,
    website: null,
    createdAt: null,
    updatedAt: null,
    jobs: [],
    contacts: [],
  },
  action
) => {
  switch (action.type) {
    case t.NEW:
      return {
        ...state,
        ...action.payload.company
      }
    case t.REMOVE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter(id => id !== action.payload.jobId)
      }
    case t.ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload.jobId]
      }
    case t.REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(id => id !== action.payload.contactId)
      }
    case t.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload.contactId]
      }
    default:
      return state;
  }
}
