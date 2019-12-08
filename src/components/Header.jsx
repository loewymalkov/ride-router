import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Ride Router</h1>
      <Link to="/">Login</Link> | <Link to="/newroute">Create a New Route</Link>| <Link to="/routes">Browse Routes</Link> | <Link to="/user">Account</Link>
    </div>
  );
}

export default Header;