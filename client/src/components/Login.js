import React, { Component } from 'react';
import '../styles/Login.css'

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
      <div className='Login'>
        <form onSubmit={this.handleSubmit} className='LoginForm'>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Email Address'
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Password'
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Login
