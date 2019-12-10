import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Route(props) {

  function handleRatingClick() {
    props.onRate(props.index);
  }

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card" style={{backgroundColor: '#26C6DA'}}>
          <div className="card-content white-text">
            <span className="card-title">{props.routeInfo}</span>
            <p><button onClick = {handleRatingClick} className='material-icons'>star</button>  | {props.rating}</p>
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
  onRate: PropTypes.func,
  index: PropTypes.number
};

export default Route;