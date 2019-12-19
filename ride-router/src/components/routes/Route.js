import React from 'react';

const Route = ({route}) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card" style={{ background: 'rgba(255, 255, 255, 0.55)'}}>
          <div className="card-content white-text">
            <p><span className="card-title">{route.title}</span></p>
            <div className="container">
            <embed 
            src={ route.routeInfo } 
            width="200" 
            height="250" 
            title="map"
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