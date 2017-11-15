import React from 'react';
import { Link } from 'react-router-dom';

export default ({isLoggedIn, logoutUser}) => {
  if (isLoggedIn) {
    return (
      <div className='NavBar'>
        <Link to='/' onClick={logoutUser}>
          <div className='button outline narrow'>
            LOGOUT
          </div>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='NavBar'>
        <Link to='/'>
          <div className='button outline narrow'>
            HOME
          </div>
        </Link>
        <Link to='/login'>
          <div className='button outline narrow'>
            LOGIN
          </div>
        </Link>
        <Link to='/signup'>
          <div className='button outline narrow'>
            SIGNUP
          </div>
        </Link>
      </div>
    )
  }
};
