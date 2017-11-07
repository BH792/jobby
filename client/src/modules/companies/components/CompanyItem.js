import React from 'react';

const CompanyItem = ({name, description}) => {
  if (description && description.length > 100) {
    description = description.slice(0, 97) + '...'
  }
  return (
    <div className='CompanyItem'>
      <div className='CompanyItemHeader'>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CompanyItem
