import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
 

const Header = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <LoggedInLinks profile={ profile } /> : <LoggedOutLinks />;
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="container">
          <Link to='/' className="brand-logo">
            Ride Router
          </Link>
          { links }
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Header);