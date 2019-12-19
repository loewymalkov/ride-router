import React from 'react';

const Browse = () => {
  return (
    <div className="container center" style={{ background: 'rgba(255, 255, 255, 0.6)', marginTop: 150 }}>
      <h5 style={{paddingTop: 25}}>About Ride Router</h5>
      <p style={{padding: 40}}>Built as a capstone project for coding school. Uses Firebase to store user accounts and maps. You can view maps uploaded by other users and get linked to google map directions. The strech goal is to be able to directly provide users with alternative directions to a destination using Google Maps API rather than provider static maps.
      </p>
    </div>
  );
};

export default Browse;