import { createSelector } from 'reselect'

export const getLoading = (state) => state.contacts.loading
export const getLastId = (state) => state.contacts.lastId
export const getSortBy = (state) => state.contacts.sortBy

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

export const getAllContactsWithCompany = (state) => {
  return state.contacts.allIds.map(id => {
    return getContactWithCompany(state, { contactId: id })
  })
}

export const getSortedContactsWithCompany = createSelector(
  getAllContactsWithCompany,
  getSortBy,
  (contacts, sortBy) => {
    return contacts.sort((a, b) => {
      switch (sortBy) {
        case 'Latest':
          return sortByLatest(a, b);
        case 'Alphabetical':
          return sortByAlpha(a, b);
        default:
          return 0;
      }
    })
  }
)

function sortByLatest(a, b) {
  if (a.createdAt < b.createdAt) {
    return -1
  } else if (a.createdAt > b.createdAt) {
    return 1
  } else {
    return 0
  }
}

function sortByAlpha(a, b) {
  if (a.fullname.toUpperCase() < b.fullname.toUpperCase()) {
    return -1
  } else if (a.fullname.toUpperCase() > b.fullname.toUpperCase()) {
    return 1
  } else {
    return 0
  }
}

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
