import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const Route = ({route}) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card" style={{backgroundColor: '#26C6DA'}}>
          <div className="card-content white-text">
            <p><span className="card-title">{route.title}</span></p>
            <p>{route.routeInfo}</p>
            <p><button className='material-icons'>star</button>  | rating </p>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Route;