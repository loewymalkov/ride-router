import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import mapStyles from '../../mapStyles';

const RouteDetails = (props) => {
  const { route, auth } = props;
  if (!auth.uid) return <Redirect to ='/sign' />

  if (route) {
    return (
      <div className="container section route-details">
        <div className="card z-depth-0" style={{ background: 'rgba(255, 255, 255, 0.55)'}}>
          <div className="card-content">
            <span className="card-title">{ route.title } </span>
            <embed 
            src={ route.routeInfo } 
            width="600" 
            height="600" 
            title="map"
            options={{
              styles: mapStyles
            }}
            ></embed>
            <p>{route.userFirstName} {route.userLastName}</p>
            <p> {moment(route.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Patience... </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const routes = state.firestore.data.routes;
  const route = routes ? routes[id] : null;
  return {
    route: route,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'routes' }
  ])
)(RouteDetails);