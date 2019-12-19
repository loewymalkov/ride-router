import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const User = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to ='/sign' />
  return(
    <div className="container center" style={{marginTop: 100}}>
      <div className="card" style={{background: 'rgba(255, 255, 255, 0.6)', padding: 5}}>
        <div className="card-title grey-text text-darken-3">Account Info</div>
        <ul className="grey-text text-darken-3" style={{margin: 30}}>
           
          <li style={{margin: 20}}>Name: {props.profile.firstName} {props.profile.lastName} </li>

          <li style={{margin: 20}} >Email: {props.auth.email} </li>

          <li style={{margin: 20}} >Sign up date:  {moment.unix(props.auth.createdAt / 1000).fromNow()}</li>

        </ul>
      </div>
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


