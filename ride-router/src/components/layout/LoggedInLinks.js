import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const LoggedInLinks = (props) => {
  return (
    <div className="nav-wrapper" style={{backgroundColor: '#F4D03F'}}>
      <ul id='nav-mobile' className="right hide-on-med-and-down" style={{backgroundColor: '#26C6DA'}}>
        <li>
          <NavLink to='/newroute'><i className="material-icons" style={{marginRight: 15}}>add_circle_outline</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='/'><i className="material-icons" style={{marginRight: 15}}>search</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='/user'><i className="material-icons" style={{marginRight: 15}}>account_circle</i>
          </NavLink>
        </li>
        <li>
          <a onClick={props.signOut}><i className="material-icons" style={{marginRight: 15}}>close</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(LoggedInLinks);