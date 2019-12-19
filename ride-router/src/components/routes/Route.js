import React from 'react';
import mapStyles from '../../mapStyles'

const Route = ({route}) => {
  return (
    <div className="row">
      <div className="col s12 m10">
        <div className="card" style={{ background: 'rgba(255, 255, 255, 0.55)'}}>
          <div className="card-content grey-text text-darken-2">
            <p><span className="card-title">{route.title}</span></p>
            <div className="container">
            <embed 
            src={ route.routeInfo } 
            width="100%" 
            height="300" 
            title="map"
            options={{
              styles: mapStyles
            }}
            >
            </embed>
            </div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Route;