import React from 'react';

const LoggedOutLinks = () => {
  return (
    <div className="nav-wrapper" style={{backgroundColor: '#F4D03F'}}>
      <ul id='nav-mobile' className="right hide-on-med-and-down" style={{backgroundColor: '#26C6DA'}}>
        <li><a href='/' className="brand-logo" style={{marginLeft: 25}}>login</a></li>
      </ul>
    </div>
  );
};

export default LoggedOutLinks;


