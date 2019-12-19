import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const LoggedInLinks = (props) => {
  return (
    <div className="nav-wrapper" style={{backgroundColor: 'rgba(0, 230, 226, 0.51)'}}>
      <ul id='nav-mobile' className="right hide-on-med-and-down">
        <li>
          <NavLink to='/newroute'><i className="material-icons" style={{marginRight: 15}}>add_circle_outline</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='/browse'><i className="material-icons" style={{marginRight: 15}}>map</i>
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