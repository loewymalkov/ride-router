import React from 'react';

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

export default User;