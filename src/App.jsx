import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Myheader from "./components/header/header";
import Img from "./components/body/Imggallery";
import ApartmentDetails from "./components/body/Apartmentinfo";
import RoomDetails from "./components/body/RoomDetails";
import MapContainer from "./components/body/MapContainer";
import CheckinDate from "./components/body/CheckinContainer";
import Reviews from "./components/body/Reviews";
import HostContainer from "./components/body/HostContainer";
import Footer from "./components/footer/Footer";
import ShareSaveCon from './components/body/ShareSaveCon';

function HotelPage() {
  return (
    <>
    <Myheader />
    {/* <ShareSaveCon/> */}
      <Img />
      <ApartmentDetails />
      <RoomDetails />
      <MapContainer />
      <CheckinDate />
      <Reviews />
      <HostContainer />
      <Footer />
    </>
  );
}

function NotFound() {
  return <div>404 Not Found</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
