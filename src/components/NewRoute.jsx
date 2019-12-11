import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';

function NewRoute(props) {
  let _routeInfo = null;
  let _rating = 0;

  function handleRouteSubmission(event) {
    event.preventDefault();
    props.onNewRouteCreation({routeInfo: _routeInfo.value, rating: _rating.value, id: v4()});
    _routeInfo.value = '';
  }

  return (

    <div style={{marginTop: 50, marginLeft: 40}} className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <span className="card-title">UPLOAD A NEW ROUTE</span>
          </div>
          <div className="card-content">
            <form onSubmit={handleRouteSubmission}>
              <textarea
                id='routeInfo'
                placeholder='Upload your map'
                ref={(textarea) => { _routeInfo = textarea; }} />
              <button type='submit'>Upload</button>
            </form>
          </div>
          <div className="card-action">
            <a href="#/routes">browse maps</a>
          </div>
        </div>
      </div>
    </div>
  );
}

NewRoute.propTypes = {
  onNewRouteCreation: PropTypes.func
};

export default NewRoute;