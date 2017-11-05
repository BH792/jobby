import React from 'react';

const CompanyItem = (props) => {
  return (
    <div className='CompanyItem'>
      <div className='CompanyItemHeader'>
        <h4>{props.name}</h4>
        <p>Add a description</p>
      </div>
    </div>
  )
}

export default CompanyItem
