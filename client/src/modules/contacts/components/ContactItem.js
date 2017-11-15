import React from 'react';

const ContactItem = (props) => {
  return (
    <div className='item contact container'>
      <div className='item contact color' />
      <div className='item contact content'>
        <div className='item contact header'>{props.fullname}</div>
        <div className='item contact subheader'>{props.company}</div>
        <div className='item contact info'>{props.title}</div>
      </div>
    </div>
  )
};

export default ContactItem;
