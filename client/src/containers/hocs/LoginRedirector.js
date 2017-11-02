import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connectAdvanced, connect } from 'react-redux'

export default function LoginRedirector(MyComponent, path, props) {
  function factorySelector(dispatch) {
    return (nextState, nextOwnProps) => {
      return {
        userId: nextState.user.id
      }
    }
  }

  function mapStateToProps(state) {
    return { userId: state.user.id }
  }

  class UnconnectedRedirect extends Component {
    render() {
      if (!this.props.userId) {
        return <Redirect to={path} />
      } else {
        return <MyComponent {...props} />
      }
    }
  }
  return withRouter(connect(mapStateToProps)(UnconnectedRedirect))
};

// const Redirector = (MyComponent, path, check, props) => {
//   if (check(this.props.state)) {
//     return () => <Redirect to={path} />
//   } else {
//     console.log();
//     return () => <MyComponent {...props} />
//   }
// };

// function mapStateToProps(state) {
//   return { state }
// }

// export default withRouter(connect(mapStateToProps, {})(Redirector));
