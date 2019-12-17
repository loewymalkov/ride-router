import React from 'react';
import Route from './Route';
import { Link } from 'react-router-dom';

const RouteList = ({routes}) => {
  return (
    <div>
      { routes && routes.map(route => {
        return (
          <Link to={'/route/' + route.id} key={route.id}>
            <Route
              route={route}/>
          </Link>
        );
      })}
    </div>
  );
};

export default RouteList;
