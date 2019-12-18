import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const User = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to ='/sign' />
  return(
    <div className="container center">
      <ul>
        <li>Username: {props.profile.firstName} </li>
        <li>Email: {props.auth.email} </li>
        <li>Sign up date:  {moment.unix(props.auth.createdAt / 1000).fromNow()}</li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(User);


