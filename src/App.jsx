// import React, { useState, useEffect } from "react";
// import Myheader from "./components/header/header";
// import Img from "./components/body/Imggallery";
// import ApartmentDetails from "./components/body/ApartmentDetails";
// import RoomDetails from "./components/body/RoomDetails";
// import MapContainer from "./components/body/MapContainer";
// import CheckinDate from "./components/body/CheckinContainer";
// import Reviews from "./components/body/Reviews";
// import HostContainer from "./components/body/HostContainer";
// import Footer from "./components/footer/Footer";
// import ShimmerLoader from "./components/ShimmerLoader";
// import config from './config.json'; 

// function App() {
//   const [hotelData, setHotelData] = useState(null);
//   const [roomsData, setRoomsData] = useState(null);
//   const [loadingHotelData, setLoadingHotelData] = useState(true);
//   const [loadingRoomsData, setLoadingRoomsData] = useState(true);

//   useEffect(() => {
//     // Fetch hotel data
//     fetch(`${config.apiBaseUrl}/hotels/Pathan-Royal-Retreat`)
//       .then(response => response.json())
//       .then(data => {
//         setHotelData(data);
//         setLoadingHotelData(false);
//       })
//       .catch(error => {console.error('Error fetching hotel data:', error)
//       setLoadingHotelData(false);});

//     // Fetch rooms data
//     fetch(`${config.apiBaseUrl}/hotels/Pathan-Royal-Retreat/rooms`)
//       .then(response => response.json())
//       .then(data => {setRoomsData(data)
//       setLoadingRoomsData(false);})
//       .catch(error =>{ console.error('Error fetching rooms data:', error)
//         setLoadingHotelData(false);
//       });
//   }, []);
 
//   return (
//     <div className="App">
//       <Myheader/>
//       {loadingHotelData ? <ShimmerLoader /> : hotelData && <Img hotelData={hotelData} />}
//       {loadingHotelData && loadingRoomsData ? <ShimmerLoader /> : hotelData && roomsData && <ApartmentDetails hotelData={hotelData} roomsData={roomsData} />}
//       {loadingHotelData && loadingRoomsData? <ShimmerLoader /> : hotelData && roomsData && <RoomDetails hotelData={hotelData} roomsData={roomsData} />}
//       {loadingHotelData ? <ShimmerLoader /> : hotelData && <MapContainer address={hotelData.address} />}
//       <CheckinDate/>
//       <Reviews/>
//       {loadingHotelData ? <ShimmerLoader /> : hotelData &&<HostContainer host_information={hotelData.host_information}/>}
//       <Footer/>
//     </div>
//   );
// }
// export default App;



import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Myheader from "./components/header/header";
import Img from "./components/body/Imggallery";
import ApartmentDetails from "./components/body/ApartmentDetails";
import RoomDetails from "./components/body/RoomDetails";
import MapContainer from "./components/body/MapContainer";
import CheckinDate from "./components/body/CheckinContainer";
import Reviews from "./components/body/Reviews";
import HostContainer from "./components/body/HostContainer";
import Footer from "./components/footer/Footer";
import ShimmerLoader from "./components/ShimmerLoader";
import config from './config.json';

function HotelContent() {
  const [hotelData, setHotelData] = useState(null);
  const [roomsData, setRoomsData] = useState(null);
  const [loadingHotelData, setLoadingHotelData] = useState(true);
  const [loadingRoomsData, setLoadingRoomsData] = useState(true);
  
  const { hotelSlug } = useParams();

  useEffect(() => {
    // Fetch hotel data
    fetch(`${config.apiBaseUrl}/hotels/Pathan-Royal-Retreat`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        setHotelData(data.data);
        setLoadingHotelData(false);
      })
      .catch(error => {
        console.error('Error fetching hotel data:', error);
        setLoadingHotelData(false);
      });

    // Fetch rooms data
    fetch(`${config.apiBaseUrl}/hotels/Pathan-Royal-Retreat/rooms`)
      .then(response => response.json())
      .then(data => {
        setRoomsData(data.data);
        setLoadingRoomsData(false);
      })
      .catch(error => {
        console.error('Error fetching rooms data:', error);
        setLoadingRoomsData(false);
      });
  }, [hotelSlug]);

  return (
    <div className="App">
      <Myheader/>
      {loadingHotelData ? <ShimmerLoader /> : hotelData && <Img hotelData={hotelData} />}
      {loadingHotelData && loadingRoomsData ? <ShimmerLoader /> : hotelData && roomsData && <ApartmentDetails hotelData={hotelData} roomsData={roomsData} />}
      {loadingHotelData && loadingRoomsData? <ShimmerLoader /> : hotelData && roomsData && <RoomDetails hotelData={hotelData} roomsData={roomsData} />}
      {loadingHotelData ? <ShimmerLoader /> : hotelData && <MapContainer address={hotelData.address} />}
      <CheckinDate/>
      <Reviews/>
      {loadingHotelData ? <ShimmerLoader /> : hotelData && <HostContainer host_information={hotelData.host_information}/>}
      <Footer/>
    </div>
  );
}

function NotFound() {
  return <div>404 Not Found</div>;
}


let hotel_slug='Pathan-Royal-Retreat'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={`/hotel/${hotel_slug}`} element={<HotelContent/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
