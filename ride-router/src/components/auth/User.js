import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const User = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to ='/sign' />
  return(
    <div className="container center">
      <ul>
        <li>Username: {props.profile.firstName} </li>
        <li>Date of account creation: today</li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(User);


