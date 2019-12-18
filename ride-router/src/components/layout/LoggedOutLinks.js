import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  return (
    <div className="nav-wrapper" style={{backgroundColor: '#F4D03F'}}>
      <ul id='nav-mobile' className="right hide-on-med-and-down" style={{backgroundColor: '#26C6DA'}}>
        <li><NavLink to='/signup' style={{marginLeft: 25}}>sign up</NavLink></li>
        <li><NavLink to='/signin' style={{marginLeft: 25}}>login</NavLink></li>
      </ul>
    </div>
  );
};

export default LoggedOutLinks;


