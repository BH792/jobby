import React from 'react'

const Touch  = ({touch}) => {
  const date = new Date(touch.date)
  return (
    <div className='detail interaction-container'>
      <p className='detail interaction contact'>{touch.subject}</p>
      <p className='detail interaction type'>{touch.type}</p>
      <p className='detail interaction date'>{date.toDateString()}</p>
      <p className='detail interaction subject'>{touch.contact}</p>
    </div>
  )
}

export default Touch;
