import React from 'react';
import { Link } from 'react-router-dom'

const ButtonLink = ({path, text}) => {
  return (
    <Link to={path}>
      <button className='form submit normal'>
        {text}
      </button>
    </Link>
  )
}

export default ButtonLink;
