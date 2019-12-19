import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../../mapStyles';

const Browse = () => {
  return (
    <div className="container center" style={{ height: 450, width: '75%', marginTop: 45 }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyCA3wzSAiUkKPjUS627ENnoEjB-Xjj0di4'}}
          defaultCenter={{lat: 45.512230, lng: -122.658722}}
          defaultZoom={12}
          yesIWantToUseGoogleMapApiInternals
          options={{
            styles: mapStyles
          }}
        />
      </div>
  );
};

export default Browse;


