import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SideBar.css';

const Sidebar = ({match}) => {
  return (
    <div className='SIDEBAR'>
      <NavLink
        to='/home'
        exact
        activeClassName='SIDEBAR-OPTION-SELECTED'
      >
        <div className='SIDEBAR-OPTION'>
          Home
        </div>
      </NavLink>
      <NavLink
        to='/home/jobs'
        activeClassName='SIDEBAR-OPTION-SELECTED'
      >
        <div className='SIDEBAR-OPTION'>
          Jobs
        </div>
      </NavLink>
      <NavLink
        to='/home/contacts'
        activeClassName='SIDEBAR-OPTION-SELECTED'
      >
        <div className='SIDEBAR-OPTION'>
          Contacts
        </div>
      </NavLink>
      <NavLink
        to='/home/companies'
        activeClassName='SIDEBAR-OPTION-SELECTED'
      >
        <div className='SIDEBAR-OPTION'>
          Companies
        </div>
      </NavLink>
    </div>
  )
};

export default Sidebar;
