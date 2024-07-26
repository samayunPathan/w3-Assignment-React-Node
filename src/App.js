import Myheader from "./components/header/header";
import Img from "./components/body/Imggallery";
import ApartmentDetails from "./components/body/Apartmentinfo";
import RoomDetails from "./components/body/RoomDetails";
import MapContainer from "./components/body/MapContainer";
import CheckinDate from "./components/body/CheckinContainer";
import Reviews from "./components/body/Reviews";
import HostContainer from "./components/body/HostContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
     
      <Myheader/>
      <Img/>
      <ApartmentDetails/>
      <RoomDetails/>
      <MapContainer/>
      <CheckinDate/>
      <Reviews/>
      <HostContainer/>
      <Footer/>
    </div>
  );
}

export default App;
