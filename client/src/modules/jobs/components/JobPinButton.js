import React from 'react';

const PinButton = ({isPinned, togglePin}) => {
  return (
    <button onClick={togglePin} className='button rounded inverted'>
      {isPinned ? <Remove /> : <Add />}
      <div>{isPinned ? 'Unpin' : 'Pin to Board'}</div>
    </button>
  )
}

export default PinButton;

const Add = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  )
}

const Remove = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13H5v-2h14v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  )
}
