import React from 'react';

const ContactItem = (props) => {
  return (
    <div className='ContactItem'>
      <div className='ContactItemHeader'>
        <h4>{props.fullname}</h4>
        <p>{props.title}</p>
      </div>
    </div>
  )
};

export default ContactItem;
