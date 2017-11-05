import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SideBar.css';

const Sidebar = ({match}) => {
  return (
    <div className='SIDEBAR'>
      <NavLink
        to={`${match.url}`}
        exact
        activeClassName='SIDEBAR-OPTION-SELECTED'
      >
        <div className='SIDEBAR-OPTION'>
          Dashboard
        </div>
      </NavLink>
      <NavLink
        to={`${match.url}/jobs`}
        activeClassName='SIDEBAR-OPTION-SELECTED'
      >
        <div className='SIDEBAR-OPTION'>
          Jobs
        </div>
      </NavLink>
      <NavLink
        to={`${match.url}/contacts`}
        activeClassName='SIDEBAR-OPTION-SELECTED'
      >
        <div className='SIDEBAR-OPTION'>
          Contacts
        </div>
      </NavLink>
      <NavLink
        to={`${match.url}/companies`}
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
