import React from 'react';
import { Link } from 'react-router-dom'

const textToType = {
  Back: 'secondary',
  'Add Touch': 'inverted'
}

const ButtonLink = ({path, text}) => {
  const type = textToType[text] || 'primary'

  return (
    <Link to={path} className='button-link'>
      <button className={`button normal ${type}`}>
        {text}
      </button>
    </Link>
  )
}

export default ButtonLink;
