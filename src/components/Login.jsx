import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';


function LogIn(props){
  let _username = null;
  let _password = null;

  function handleLogIn(event) {
    event.preventDefault();
    props.onLogIn({username: _username, password: _password, id: v4() });
    password.value = '';
  }
  return (
    <div>
      <h1>Sign in to your profile</h1>
      <form onSubmit={handleLogIn}>
      <input
        type='text'
        id='username'
        placeholder='username or email'
        ref={(input) => { _username = input; }} />
        <input
        type='text'
        id='password'
        placeholder='password'
        ref={(input) => { _password = input; }} />
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}

LogIn.propTypes = {
  onLogIn: PropTypes.func
};

export default LogIn;