import { createSelector } from 'reselect'

export const getLoading = (state) => state.contacts.loading
export const getLastId = (state) => state.contacts.lastId

const getContact = (state, props) => {
  return state.contacts.byId[props.contactId]
}

const getContactCompanyName = (state, props) => {
  const contact = getContact(state, props)
  if (contact) {
    return state.companies.byId[contact.companyId].name
  } else {
    return null
  }
}

export const getContactWithCompany = createSelector(
  getContact,
  getContactCompanyName,
  (contact, company) => {
    return {
      ...contact,
      company
    }
  }
)

export const getContactTouches = (state, props) => {
  return getContactTouchIds(state, props).map(touchId => {
    return {
      ...getTouch(state, { touchId }),
      contact: getTouchContactName(state, { touchId }),
      job: getTouchJobTitle(state, { touchId })
    }
  })
}

const getTouch = (state, props) => {
  return state.touches.byId[props.touchId]
}

const getTouchContactName = (state, props) => {
  return state.contacts.byId[getTouch(state, props).contactId].fullname
}

const getTouchJobTitle = (state, props) => {
  if (getTouch(state, props).jobId) {
    return state.jobs.byId[getTouch(state, props).jobId].title
  } else {
    return null
  }
}

export const getContactTouchIds = (state, props) => {
  return getContact(state, props).touches
}
