import React from 'react';
import Route from './Route';

const RouteList = ({routes}) => {
  return (
    <div>
      { routes && routes.map(route => {
        return (
          <Route
            route={route}
            rating={rating}
            key={route.id}/>
        );
      })}
    </div>
  );
};

export default RouteList;
