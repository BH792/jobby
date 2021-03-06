import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitLogin(this.state)
  }

  render() {
    return (
      <div className='form center'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Email Address'
            className='form input wide'
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Password'
            className='form input wide'
          />
          <button className='form submit normal'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
