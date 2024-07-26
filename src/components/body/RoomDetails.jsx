import React from "react";
import "./RoomDetails.css";

const RoomDetails = () => {
  return (
    <div className="room-details">
      <div className="bed-img">
        <h5>Where you'll sleep ..</h5>
        <div className="bed-img">
          <img src="/room1.jpg" alt="Bedroom" />
          <p>Bedroom</p>
          <p>1 Doublebed</p>
        </div>
      </div>

      <div className="what-place">
        <h2>What this place offers</h2>
        <div className="amenities-list">
          <div className="amen-1">
            <div className="amenity">
              <span className="amenity-icon">🍽️</span>
              <span>Kitchen</span>
            </div>
            <div className="amenity">
              <span className="amenity-icon">📺</span>
              <span>TV</span>
            </div>
            <div className="amenity">
              <span className="amenity-icon">📶</span>
              <span>Wifi</span>
            </div>
            <div className="amenity">
              <span className="amenity-icon">🛗</span>
              <span>Elevator</span>
            </div>
            <div className="amenity">
              <span className="amenity-icon">🚨</span>
              <span className="strikethrough">Smoke alarm</span>
            </div>
          </div>
          <div className="amen-2">
            <div className="amenity">
              <span className="amenity-icon">🧺</span>
              <span>Washer</span>
            </div>
            <div className="amenity">
              <span className="amenity-icon">🧺</span>
              <span>Dryer</span>
            </div>
            <div className="amenity">
              <span className="amenity-icon">💨</span>
              <span>Hair dryer</span>
            </div>
            <div className="amenity">
              <span className="amenity-icon">🧊</span>
              <span>Refrigerator</span>
            </div>
            <div className="amenity">
              <span className="amenity-icon">🚨</span>
              <span className="strikethrough">Carbon monoxide alarm</span>
            </div>
          </div>
        </div>
        <button className="amen-btn">Show all 32 amenities</button>
      </div>
    </div>
  );
};

export default RoomDetails;
