import React from 'react';
import UserAPI from '../../../adapters/userJobbyAPI';
import { connect } from 'react-redux';
import users from '../../users';

const a = users.actions

const DemoButton = ({ submitDemoLogin }) => {
  return (
    <button
      className='button normal primary'
      onClick={submitDemoLogin}
      style={{
        position: 'relative',
        left: '200px',
        top: '200px',
        border: 'none',
        width: '200px',
        height: '75px',
        fontSize: '24px'
      }}
      >
        Demo
    </button>
  )
};

export function submitDemoLogin() {
  return (dispatch) => {
    dispatch(a.loading())
    UserAPI.login({email: 'test@test.com', password: 'apple'})
      .then(json => {
        if (json.status === 'SUCCESS') {
          localStorage.setItem('token', json.token)
          dispatch(a.login(json.user))
          a.fetchAllData(dispatch)
        }
      })
  }
}

export default connect(null, { submitDemoLogin })(DemoButton);
