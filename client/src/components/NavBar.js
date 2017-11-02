import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <Link to='/login'>LOGIN</Link>
      <Link to='/'>HOME</Link>
    </div>
  )
}
