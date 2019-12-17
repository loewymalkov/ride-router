import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  return (
    <div className="nav-wrapper" style={{backgroundColor: '#F4D03F'}}>
      <ul id='nav-mobile' className="right hide-on-med-and-down" style={{backgroundColor: '#26C6DA'}}>
        <li><NavLink to='/signup' className="brand-logo" style={{marginLeft: 25}}>login</NavLink></li>
        <li><NavLink to='/signin' className="brand-logo" style={{marginLeft: 25}}>login</NavLink></li>
      </ul>
    </div>
  );
};

export default LoggedOutLinks;


