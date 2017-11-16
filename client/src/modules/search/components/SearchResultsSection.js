import React from 'react';
import itemLister from '../../shared/Lister';
import { JobItem } from '../../jobs'
import { CompanyItem } from '../../companies'
import { ContactItem } from '../../contacts'
import { TouchItem } from '../../touches'

const item = {
  Jobs: JobItem,
  Contacts: ContactItem,
  Touches: TouchItem,
  Companies: CompanyItem,
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
