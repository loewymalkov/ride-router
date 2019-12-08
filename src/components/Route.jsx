import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Route(props) {

  function handleRatingClick() {
    props.rate(props.index);
  }

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{props.routeInfo}</span>
            <p><button onClick = {handleRatingClick} className='material-icons'>star</button>  | <span >5</span></p>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}

Route.propTypes = {
  routeInfo: PropTypes.string,
  rating: PropTypes.number,
  rate: PropTypes.func,
  index: PropTypes.number
};

export default Route;