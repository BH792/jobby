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
      console.log(action.payload.jobId);
      return {
        ...state,
        jobs: [...state.jobs, action.payload.jobId]
      }
    default:
      return state;
  }
}
