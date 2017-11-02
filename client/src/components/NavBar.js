import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default ({isLoggedIn, logoutUser}) => {
  if (isLoggedIn) {
    return (
      <div className='NavBar'>
        <Link to='/' onClick={logoutUser}>
          <div className='NavBarButton'>
            LOGOUT
          </div>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='NavBar'>
        <Link to='/'>
          <div className='NavBarButton'>
            HOME
          </div>
        </Link>
        <Link to='/login'>
          <div className='NavBarButton'>
            LOGIN
          </div>
        </Link>
        <Link to='/signup'>
          <div className='NavBarButton'>
            SIGNUP
          </div>
        </Link>
      </div>
    )
  }
};
