// import React from "react";


// const MapContainer = ({props}) => {
//   return (
    
//     <div className="map-container" style={{ margin: "30px" }}>
//       <h3>Where you'll be</h3>
//       <p>hell{props}</p>
//       <div className="map-img">
//         <img src="/map.png" alt="Map" />
//         <p>
//           <a href="#">see more</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MapContainer;

import React from "react";

const MapContainer = ({ address }) => {
  return (
    <div className="map-container" style={{ margin: "30px" }}>
      <h3>Where you'll be</h3>
      <p>{address}</p>
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

