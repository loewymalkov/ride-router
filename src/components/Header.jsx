import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';


function Header(){
  return (
    <div style={{backgroundColor: '#80DEEA'}}>
      <h1 style={{color: 'white'}}>RIDE ROUTER</h1>
      <Link to="/">Login</Link> | <Link to="/newroute">Create a New Route</Link>| <Link to="/routes" className="" >Browse Routes</Link> | <Link to="/user">Account</Link>
    </div>
  );
}

export default Header;