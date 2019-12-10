import React from 'react';
import Route from './Route';
import PropTypes from 'prop-types';

function RouteList(props) {
  props.routeList.sort((a, b) => b.rating - a.rating);
  return (
    <div>
      <hr/>
      {props.routeList.map((route, index) => 
        <Route
          routeInfo={route.routeInfo}
          onRate={props.onRate}
          rating={props.rating}
          index={index}
          key={route.id}/>
      )}
    </div>
  );
}

RouteList.propTypes = {
  routeList: PropTypes.array,
  onRate: PropTypes.func,
  rating: PropTypes.number,
  index: PropTypes.number
};

export default RouteList;
