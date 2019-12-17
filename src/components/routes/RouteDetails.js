import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const RouteDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section route-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Awesome Route - {id} </span>
          <p>HERE GOES THE MAP</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Route uploaded by Mav Malkin</div>
          <div> December 16 2019 </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;