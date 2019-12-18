import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.id]:
      event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div style={{marginTop: 50, marginLeft: 40}} className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <input
                  type='email'
                  id='username'
                  placeholder='username or email'
                  onChange={this.handleChange} />
                <input
                  type='password'
                  id='password'
                  placeholder='password'
                  onChange={this.handleChange} />
                  <input
                  type='text'
                  id='firstName'
                  placeholder='First Name'
                  onChange={this.handleChange} />
                  <input
                  type='text'
                  id='lastName'
                  placeholder='Last Name'
                  onChange={this.handleChange} />
                <button type='submit'>Register</button>
              </form>
            </div>
            <div className="card-action">
              <a href="#/routes">browse maps</a>
            </div>
            <div className="center red-text">
              { authError ? <p>{ authError }</p> : null }
            </div>
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);