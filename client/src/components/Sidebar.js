import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({match}) => {
  return (
    <div className='sidebar'>
      <NavLink
        to={`${match.url}`}
        exact
        activeClassName='sidebar selected'
      >
        <div className='sidebar option'>
          <div>
            <p>Dashboard</p>
            <Dashboard />
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`${match.url}/search`}
        activeClassName='sidebar selected'
      >
        <div className='sidebar option'>
          <div>
            <p>Search</p>
            <Search />
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`${match.url}/jobs`}
        activeClassName='sidebar selected'
      >
        <div className='sidebar option'>
          <div>
            <p>Jobs</p>
            <Job />
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`${match.url}/contacts`}
        activeClassName='sidebar selected'
      >
        <div className='sidebar option'>
          <div>
            <p>Contacts</p>
            <Contact />
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`${match.url}/touches`}
        activeClassName='sidebar selected'
      >
        <div className='sidebar option'>
          <div>
            <p>Touches</p>
            <Touch />
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`${match.url}/companies`}
        activeClassName='sidebar selected'
      >
        <div className='sidebar option'>
          <div>
            <p>Companies</p>
            <Company />
          </div>
        </div>
      </NavLink>
    </div>
  )
};

export default Sidebar;

const Job = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
    </svg>
  )
}

const Dashboard = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  )
}

const Contact = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  )
}

const Company = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  )
}

const Search = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  )
}

const Touch = () => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/>
    </svg>
  )
}
