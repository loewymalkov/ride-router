import React from 'react';

const Browse = () => {
  return (
    <div className="mapouter center" style={{marginTop: 25}}>
      <div className="gmap_canvas">
        <iframe 
        title="browse"
        width="75%" 
        height="500" 
        id="gmap_canvas" 
        src="https://maps.google.com/maps?q=epicodus&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        frameborder="0" 
        scrolling="yes" 
        marginheight="" 
        marginwidth="0">
        </iframe>
      </div>
    </div>
  );
};

export default Browse;


