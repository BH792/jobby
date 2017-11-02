import React from 'react';
import { Redirect } from 'react-router-dom'

const Redirector = (MyComponent, path, check, props) => {
  if (check()) {
    return () => <Redirect to={path} />
  } else {
    return () => <MyComponent {...props} />
  }
};

export default Redirector;
