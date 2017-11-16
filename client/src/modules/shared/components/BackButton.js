import React from 'react';

const BackButton = ({ history }) => {
  const back = () => {
    history.goBack()
  }
  return (
    <div className='button-link'>
      <button
        className='button normal secondary'
        onClick={back}
        >
          Back
      </button>
    </div>
  )
};

export default BackButton;
