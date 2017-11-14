import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

// class Search extends React.Component {
//   state = {
//     search: '',
//     focus: false
//   }
//
//   handleChange = (e) => {
//     this.setState({
//       search: e.target.value
//     })
//   }
//
//   handleFocus = () => {
//     this.setState({
//       focus: true
//     })
//   }
//
//   render() {
//     const { focus, search } = this.state
//     return (
//       <div>
//         <input
//           type='text'
//           value={search}
//           onFocus={this.handleFocus}
//           onChange={this.handleChange}
//           className={`form input ${focus ? 'wide' : 'normal'}`}
//         />
//         <div className='MainApplication' style={{zIndex: '5'}}>
//           Results
//         </div>
//       </div>
//     )
//   }
// }

export default ({isLoggedIn, logoutUser}) => {
  if (isLoggedIn) {
    return (
      <div className='NavBar'>
        <Link to='/' onClick={logoutUser}>
          <div className='button outline narrow'>
            LOGOUT
          </div>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='NavBar'>
        <Link to='/'>
          <div className='button outline narrow'>
            HOME
          </div>
        </Link>
        <Link to='/login'>
          <div className='button outline narrow'>
            LOGIN
          </div>
        </Link>
        <Link to='/signup'>
          <div className='button outline narrow'>
            SIGNUP
          </div>
        </Link>
      </div>
    )
  }
};
