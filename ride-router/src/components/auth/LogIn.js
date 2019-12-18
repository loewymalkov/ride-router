import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class LogIn extends Component {
    state = {
      email: '',
      password: ''
    }

    handleChange = (event) => {
      this.setState({
        [event.target.id]:
        event.target.value
      })
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.signIn(this.state);
    }
  
  render() {
    const { authError, auth } = this.props;
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
                <button type='submit'>Log In</button>
              </form>
            </div>
            <div className="card-action">
              <a href="#/routes">browse maps</a>
            </div>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);