import React from 'react';

const CompanyItem = ({name, description}) => {
  if (description && description.length > 100) {
    description = description.slice(0, 97) + '...'
  }
  return (
    <div className='item company container'>
      <div className='item company color'/>
      <div className='item company content'>
        <p className='item company header'>{name}</p>
        <p className='item company info'>{description}</p>
      </div>
    </div>
  )
}

export default CompanyItem
