import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Ride Router</h1>
      <Link to="/">Login</Link> | <Link to="/newpost">Create a New Route</Link>| <Link to="/routes">Browse Routes</Link>
    </div>
  );
}

export default Header;