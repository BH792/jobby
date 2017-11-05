import React, { Component } from 'react';
import '../../../styles/Signup.css'

class Signup extends Component {
  state = {
    email: '',
    fullname: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitSignup(this.state)
  }

  render() {
    return (
      <div className='Signup'>
        <form onSubmit={this.handleSubmit} className='SignupForm'>
          <input
            type='text'
            name='fullname'
            value={this.state.fullname}
            onChange={this.handleChange}
            placeholder='Name'
          />
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
};

export default Signup;
