import React from 'react';
import { Link } from 'react-router-dom'

const ButtonLink = ({path, text}) => {
  return (
    <Link to={path} className='router-link'>
      <button className={`button normal ${text === 'Back' ? 'secondary' : 'primary'}`}>
        {text}
      </button>
    </Link>
  )
}

export default ButtonLink;
