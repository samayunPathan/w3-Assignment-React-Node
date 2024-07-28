import React from "react";
import "./RoomDetails.css";

const RoomDetails = ({ hotelData, roomsData }) => {
  if (!hotelData || !roomsData) return <div>Loading...</div>;

  const allImages = roomsData.flatMap(room => room.room_image);

  return (
    <div className="room-details">
      <div className="image-gal">
        {allImages.map((room_image, index) => (
          <div key={index} className="image-item">
            <img src={`http://localhost:3001${room_image}`} alt={`Room ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="what-place">
        <h2>What this place offers</h2>
        <div className="amenities-list">
          <div className="amen-1">
            {hotelData.amenities.slice(0, Math.ceil(hotelData.amenities.length / 2)).map((amenity, index) => (
              <AmenityItem key={index} name={amenity} />
            ))}
          </div>
          <div className="amen-2">
            {hotelData.amenities.slice(Math.ceil(hotelData.amenities.length / 2)).map((amenity, index) => (
              <AmenityItem key={index} name={amenity} />
            ))}
          </div>
        </div>
        <button className="amen-btn">Show all {hotelData.amenities.length} amenities</button>
      </div>
    </div>
  );
};

const AmenityItem = ({ name }) => (
  <div className="amenity">
    <span className="amenity-icon">🏠</span>
    <span>{name}</span>
  </div>
);

export default RoomDetails;