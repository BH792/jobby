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
        <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
        <path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/>
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
