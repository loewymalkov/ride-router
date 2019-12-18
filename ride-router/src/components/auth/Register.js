// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { signUp } from '../../store/actions/authActions';

// class Register extends Component {
//   state = {
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: ''
//   }
  
//   handleChange = (event) => {
//     this.setState({
//       [event.target.id]:
//       event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.signUp(this.state);
//   }

//   render() {
//     const { auth, authError } = this.props;
//     if (auth.uid) return <Redirect to='/' />
//     return (
//       <div style={{marginTop: 50, marginLeft: 40}} className="row">
//         <div className="col s12 m7">
//           <div className="card">
//             <div className="card-content">
//               <form onSubmit={this.handleSubmit}>
//                 <input
//                   type='email'
//                   id='username'
//                   placeholder='username or email'
//                   onChange={this.handleChange} />
//                 <input
//                   type='password'
//                   id='password'
//                   placeholder='password'
//                   onChange={this.handleChange} />
//                   <input
//                   type='text'
//                   id='firstName'
//                   placeholder='First Name'
//                   onChange={this.handleChange} />
//                   <input
//                   type='text'
//                   id='lastName'
//                   placeholder='Last Name'
//                   onChange={this.handleChange} />
//                 <button>Register</button>
//               </form>
//             </div>
//             <div className="center red-text">
//               { authError ? <p>{ authError }</p> : null }
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth,
//     authError: state.auth.authError
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signUp: (newUser) => dispatch(signUp(newUser))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form style={{ background: 'rgba(255, 255, 255, 0.6)'}} onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock</i>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">group</i>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{ authError }</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)