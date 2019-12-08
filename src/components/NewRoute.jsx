import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewRoute(props) {
  let _routeInfo = null;

  function handleRouteSubmission(event) {
    event.preventDefault();
    props.onNewRouteCreation({routeInfo: _routeInfo, id: v4()});
    _routeInfo.value = '';
  }

  return (
    <div>
      <h1>Upload a new route</h1>
      <form onSubmit={handleRouteSubmission}>
      <textarea
        id='routeInfo'
        placeholder='Upload your map'
        ref={(textarea) => { _routeInfo = textarea; }} />
        <button type='submit'>Upload</button>
      </form>
    </div>
  );
}

NewRoute.propTypes = {
  onNewRouteCreation: PropTypes.func
};

export default NewRoute;