import React from 'react';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import 'materialize-css/dist/css/materialize.min.css';


const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <LoggedInLinks />
        <LoggedOutLinks />
      </nav>
    </div>
  );
};

export default Header;