import React from 'react';
import itemLister from '../../shared/Lister';
import jobs from '../../jobs'
import companies from '../../companies'
import contacts from '../../contacts'
import touches from '../../touches'

const item = {
  Jobs: jobs.JobItem,
  Contacts: contacts.ContactItem,
  Touches: touches.TouchItem,
  Companies: companies.CompanyItem,
}

const SearchResultsSection = ({data, section}) => {
  if (data.length) {
    const ResultsList = itemLister(item[section], data, { url: `/home/${section}`})
    return (
      <div>
        <h3 className='detail subheader'>{section}</h3>
        <div>
          <ResultsList />
        </div>
      </div>
    )
  } else {
    return null
  }
}

SearchResultsSection.defaultProps = {
  data: []
}

export default SearchResultsSection
