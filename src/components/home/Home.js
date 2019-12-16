import React, { Component } from 'react';
import RouteList from '../routes/RouteList';
import Rating from '../routes/Rating';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Home extends Component {
  render() {
    const { routes } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <RouteList routes={routes} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Rating />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.routes || state.project.routes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'routes' }
  ])
)(Home)