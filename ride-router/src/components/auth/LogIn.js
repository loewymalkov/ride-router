import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form style={{ background: 'rgba(255, 255, 255, 0.6)'}} onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Log In</h5>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <label htmlFor="email" className="grey-text text-darken-2">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock</i>
            <label className="grey-text text-darken-2" htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)



// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { signIn } from '../../store/actions/authActions';
// import { Redirect } from 'react-router-dom';

// class LogIn extends Component {
//     state = {
//       email: '',
//       password: ''
//     }

//     handleChange = (event) => {
//       this.setState({
//         [event.target.id]:
//         event.target.value
//       })
//     }
  
//     handleSubmit = (event) => {
//       event.preventDefault();
//       this.props.signIn(this.state);
//     }
  
//   render() {
//     const { authError, auth } = this.props;
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
//                 <button>Log In</button>
//               </form>
//             </div>
//             <div className="red-text center">
//               { authError ? <p>{authError}</p> : null }
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     authError: state.auth.authError,
//     auth: state.firebase.auth
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: (creds) => dispatch(signIn(creds))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LogIn)