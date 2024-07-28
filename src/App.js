import React, { useState, useEffect } from "react";
import Myheader from "./components/header/header";
import Img from "./components/body/Imggallery";
import ApartmentDetails from "./components/body/ApartmentDetails";
import RoomDetails from "./components/body/RoomDetails";
import MapContainer from "./components/body/MapContainer";
import CheckinDate from "./components/body/CheckinContainer";
import Reviews from "./components/body/Reviews";
import HostContainer from "./components/body/HostContainer";
import Footer from "./components/footer/Footer";


function App() {
  const [hotelData, setHotelData] = useState(null);
  const [roomsData, setRoomsData] = useState(null);

  useEffect(() => {
    // Fetch hotel data
    fetch('http://localhost:3001/hotels/Pathan-Boutique-Hotel')
      .then(response => response.json())
      .then(data => {
        setHotelData(data);
      })
      .catch(error => console.error('Error fetching hotel data:', error));

    // Fetch rooms data
    fetch('http://localhost:3001/hotels/Pathan-Boutique-Hotel/rooms')
      .then(response => response.json())
      .then(data => setRoomsData(data))
      .catch(error => console.error('Error fetching rooms data:', error));
  }, []);
 
  return (
    <div className="App">
      <Myheader/>
      {hotelData && <Img hotelData={hotelData} />}
      {hotelData && roomsData && <ApartmentDetails hotelData={hotelData} roomsData={roomsData} />}
      {hotelData && roomsData && <RoomDetails hotelData={hotelData} roomsData={roomsData} />}
      {hotelData && <MapContainer address={hotelData.address} />}
      <CheckinDate/>
      <Reviews/>
      {hotelData &&<HostContainer host_information={hotelData.host_information}/>}
      <Footer/>
    </div>
  );
}
export default App;
