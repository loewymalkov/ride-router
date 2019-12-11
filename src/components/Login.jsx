import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function LogIn(props){
  let _username = null;
  let _password = null;

  function handleLogIn(event) {
    event.preventDefault();
    props.onLogIn({username: _username.value, password: _password.value, id: v4() });
    _password.value = '';
  }
  return (
    <div style={{marginTop: 50, marginLeft: 40}} className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-content">
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
          <div className="card-action">
            <a href="#/routes">browse maps</a>
          </div>
        </div>
      </div>
    </div>
  );
}

LogIn.propTypes = {
  onLogIn: PropTypes.func
};

export default LogIn;