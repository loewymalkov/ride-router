import React from 'react';

const LoggedInLinks = () => {
  return (
    <div className="nav-wrapper" style={{backgroundColor: '#F4D03F'}}>
      <ul id='nav-mobile' className="right hide-on-med-and-down" style={{backgroundColor: '#26C6DA'}}>
        <li><a href='#/newroute'><i className="material-icons" style={{marginRight: 15}}>add_circle_outline</i></a></li>
        <li><a href='#/routes'><i className="material-icons" style={{marginRight: 15}}>search</i></a></li>
        <li><a href='#/user'><i className="material-icons" style={{marginRight: 15}}>account_circle</i></a></li>
        <li><a href='#/logout'><i className="btn btn-floating" style={{marginRight: 15}}>Log Out</i></a></li>
      </ul>
    </div>
  );
};

export default LoggedInLinks;