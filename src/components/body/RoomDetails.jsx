// import React from "react";
// import "./RoomDetails.css";

// const RoomDetails = () => {
//   return (
//     <div className="room-details">
//       <div className="bed-img">
//         <h5>Where you'll sleep ..</h5>
//         <div className="bed-img">
//           <img src="/room1.jpg" alt="Bedroom" />
//           <p>Bedroom</p>
//           <p>1 Doublebed</p>
//         </div>
//       </div>

//       <div className="what-place">
//         <h2>What this place offers</h2>
//         <div className="amenities-list">
//           <div className="amen-1">
//             <div className="amenity">
//               <span className="amenity-icon">🍽️</span>
//               <span>Kitchen</span>
//             </div>
//             <div className="amenity">
//               <span className="amenity-icon">📺</span>
//               <span>TV</span>
//             </div>
//             <div className="amenity">
//               <span className="amenity-icon">📶</span>
//               <span>Wifi</span>
//             </div>
//             <div className="amenity">
//               <span className="amenity-icon">🛗</span>
//               <span>Elevator</span>
//             </div>
//             <div className="amenity">
//               <span className="amenity-icon">🚨</span>
//               <span className="strikethrough">Smoke alarm</span>
//             </div>
//           </div>
//           <div className="amen-2">
//             <div className="amenity">
//               <span className="amenity-icon">🧺</span>
//               <span>Washer</span>
//             </div>
//             <div className="amenity">
//               <span className="amenity-icon">🧺</span>
//               <span>Dryer</span>
//             </div>
//             <div className="amenity">
//               <span className="amenity-icon">💨</span>
//               <span>Hair dryer</span>
//             </div>
//             <div className="amenity">
//               <span className="amenity-icon">🧊</span>
//               <span>Refrigerator</span>
//             </div>
//             <div className="amenity">
//               <span className="amenity-icon">🚨</span>
//               <span className="strikethrough">Carbon monoxide alarm</span>
//             </div>
//           </div>
//         </div>
//         <button className="amen-btn">Show all 32 amenities</button>
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;


// import React, { useState, useEffect } from "react";
// import "./RoomDetails.css";

// const RoomDetails = () => {
//   const [hotelData, setHotelData] = useState(null);
//   const [roomsData, setRoomsData] = useState(null);

//   useEffect(() => {
//     // Fetch hotel data
//     fetch('http://localhost:3001/hotels/Hotel-Radisson-Blu')
//       .then(response => response.json())
//       .then(data => setHotelData(data))
//       .catch(error => console.error('Error fetching hotel data:', error));

//     // Fetch rooms data
//     fetch('http://localhost:3001/hotels/Hotel-Radisson-Blu/rooms')
//       .then(response => response.json())
//       .then(data => setRoomsData(data))
//       .catch(error => console.error('Error fetching rooms data:', error));
//   }, []);

//   if (!hotelData || !roomsData) return <div>Loading...</div>;

//   const firstRoom = roomsData[0]; // Assuming we're displaying the first room

//   return (
//     <div className="room-details">
//       <div className="bed-img">
//         <h5>Where you'll sleep ..</h5>
//         <div className="bed-img">
//           {firstRoom.room_image && firstRoom.room_image.length > 0 && (
//             <img 
//               src={`http://localhost:3001${firstRoom.room_image[0]}`} 
//               alt={firstRoom.room_title} 
//             />
//           )}
//           <p>{firstRoom.room_title}</p>
//           <p>{firstRoom.bedroom_count} {firstRoom.bedroom_count > 1 ? 'Beds' : 'Bed'}</p>
//         </div>
//       </div>

//       <div className="what-place">
//         <h2>What this place offers</h2>
//         <div className="amenities-list">
//           <div className="amen-1">
//             {hotelData.amenities.slice(0, Math.ceil(hotelData.amenities.length / 2)).map((amenity, index) => (
//               <AmenityItem key={index} name={amenity} />
//             ))}
//           </div>
//           <div className="amen-2">
//             {hotelData.amenities.slice(Math.ceil(hotelData.amenities.length / 2)).map((amenity, index) => (
//               <AmenityItem key={index} name={amenity} />
//             ))}
//           </div>
//         </div>
//         <button className="amen-btn">Show all {hotelData.amenities.length} amenities</button>
//       </div>
//     </div>
//   );
// };

// const AmenityItem = ({ name }) => (
//   <div className="amenity">
//     <span className="amenity-icon">🏠</span>
//     <span>{name}</span>
//   </div>
// );

// export default RoomDetails;




import React, { useState, useEffect } from "react";
import "./RoomDetails.css";

const RoomDetails = () => {
  const [hotelData, setHotelData] = useState(null);
  const [roomsData, setRoomsData] = useState(null);

  useEffect(() => {
    // Fetch hotel data
    fetch('http://localhost:3001/hotels/Hotel-Radisson-Blu')
      .then(response => response.json())
      .then(data => setHotelData(data))
      .catch(error => console.error('Error fetching hotel data:', error));

    // Fetch rooms data
    fetch('http://localhost:3001/hotels/Hotel-Radisson-Blu/rooms')
      .then(response => response.json())
      .then(data => setRoomsData(data))
      .catch(error => console.error('Error fetching rooms data:', error));
  }, []);

  if (!hotelData || !roomsData) return <div>Loading...</div>;

  const allImages = roomsData.flatMap(room => room.room_image);

  return (
    <div className="room-details">
      <div className="image-gallery">
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