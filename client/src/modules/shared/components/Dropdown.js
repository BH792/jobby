import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    value: '',
    label: '',
    optionsVisible: false,
  }

  showOptions = () => {
    this.setState({
      optionsVisible: true
    })
  }

  hideOptions = (e) => {
    this.setState({
      optionsVisible: false
    })
  }

  selectOption = (e) => {
    this.setState({
      optionsVisible: false,
      value: e.target.dataset.value,
      label: e.target.dataset.label,
    })
  }

  handleChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.label}
          onFocus={this.showOptions}
          onChange={this.handleChange}
          className='form input wide'
        />
        <div style={{
          display: `${this.state.optionsVisible ? 'block' : 'none'}`,
          position: 'absolute',
          backgroundColor: 'white'
        }}>
          <ul onClick={this.selectOption}>
            <li data-value='1' data-label='Option 1'>Option 1</li>
            <li data-value='2' data-label='Option 2'>Option 2</li>
            <li data-value='3' data-label='Option 3'>Option 3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Dropdown
