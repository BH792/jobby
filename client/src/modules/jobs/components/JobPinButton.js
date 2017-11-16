import React from 'react';

const PinButton = ({isPinned, togglePin}) => {
  return (
    <button onClick={togglePin} className='button normal inverted'>
      {isPinned ? 'Unpin' : 'Pin to Board'}
    </button>
  )
}

export default PinButton
