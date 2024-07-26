import React from "react";

const MapContainer = () => {
  return (
    <div className="map-container" style={{ margin: "30px" }}>
      <h3>Where you'll be</h3>
      <p>Lima, Peru</p>
      <div className="map-img">
        <img src="/map.png" alt="Map" />
        <p>
          <a href="#">see more</a>
        </p>
      </div>
    </div>
  );
};

export default MapContainer;
