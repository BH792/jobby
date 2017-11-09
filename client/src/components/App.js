import React, { Component } from 'react';
import MainApplication from '../containers/MainApplication';
import PublicHomepage from '../containers/PublicHomepage';
import ConnectedNavBar from '../containers/ConnectedNavBar';
import LoadingIcon from '../components/LoadingIcon';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import users from '../modules/users';
import '../styles/App.css';

const { loginFromLocalStorage } = users.actions

class App extends Component {
  componentDidMount() {
    try {
      if (localStorage.getItem('token')) {
        this.props.loginFromLocalStorage()
      }
    } catch (e) {

    }
  }

  render() {
    if (this.props.userLoading) {
      return (
        <div className='form center' style={{textAlign: 'center'}}>
          <LoadingIcon dimensions={{height: 250, width: 250}}/>
        </div>
      )
    }

    return (
      <div className='APP'>
        <div className='APP-LOGO' style={{backgroundColor: '#EF8354'}}>JOBBY</div>
        <ConnectedNavBar className='APP-NAV'/>
        <Switch>
          <Route path='/home' component={MainApplication} />
          <Route path='/' component={PublicHomepage} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.id,
    userLoading: state.user.loading,
    fetchedData: state.user.fetchedData
  }
}

const mapDispatchToProps = {
  loginFromLocalStorage
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
