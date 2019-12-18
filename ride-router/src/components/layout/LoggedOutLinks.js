import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  return (
    <div className="nav-wrapper" style={{backgroundColor: 'rgba(0, 230, 226, 0.51)'}}>
      <ul id='nav-mobile' className="right hide-on-med-and-down">
        <li><NavLink to='/signup' style={{marginLeft: 25}}>REGISTER</NavLink></li>
        <li><NavLink to='/signin' style={{marginLeft: 25}}>LOGIN</NavLink></li>
      </ul>
    </div>
  );
};

export default LoggedOutLinks;


