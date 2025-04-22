import React from 'react';

const GoogleMap = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=33-16-24 prabhu nilayam&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Google Map"
        ></iframe>
        <a href="https://sprunkin.com/">Sprunki Incredibox</a>
      </div>
      <style>{`
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 400px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 400px;
        }
        .gmap_iframe {
          height: 400px !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleMap;