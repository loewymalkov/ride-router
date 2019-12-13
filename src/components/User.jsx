import React from 'react';
import PropTypes from 'prop-types';

// will need to be completely refactored into seperate folder

function User(props) {
  return(
    <div>
      <ul>
        <li>Username: {props.username} </li>
        <li>Date of account creation: today</li>
        <li>Route Submissions: </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default User;