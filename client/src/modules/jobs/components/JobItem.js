import React from 'react';

const JobItem = (props) => {
  let { title, company, description } = props
  if (description && description.length > 100) {
    description = description.slice(0, 97) + '...'
  }

  return (
    <div className='item job container'>
      <div className='item job color' />
      <div className='item job content'>
        <p className='item job header'>{title}</p>
        <p className='item job subheader'>{company}</p>
        <p className='item job info'>{description}</p>
      </div>
    </div>
  )
}

export default JobItem
