import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ApartmentDetails.css";

const ApartmentDetails = ({ hotelData, roomsData }) => {
  if (!hotelData || !roomsData) return <div>Loading...</div>;

  const roomData = roomsData[0];

  return (
    <div className="apartment">
      <div className="hosted">
        <div className="left-side">
          <h3>{hotelData.title} in {hotelData.address}</h3>
          <ul>
            <li>{hotelData.guest_count} guests</li>
            <li>{hotelData.bedroom_count} rooms</li>
            <li>{roomData.bed_count} beds</li>
            <li>{hotelData.bathroom_count} baths</li>
          </ul>
          <div className="inline-star">
            <FontAwesomeIcon icon={faStar} />
            <h5>New</h5>
          </div>
          <hr />
          <HostInfo
            image="/w3.png"
            name="w3engineers Ltd"
            info={["Superhost", "7 years hosting"]}
          />
          <HostInfo
            image="/w3.png"
            name="Self check in"
            info={["Check yourself in the smartlock"]}
          />
          <HostInfo
            image="/w3.png"
            name="Superhost"
            info={[hotelData.host_information]}
          />
        </div>

        <div className="right-side">
          <div className="containerApart">
            <h2>Add dates for prices</h2>
            <div className="date-picker">
              <div>
                CHECK-IN <br />Add date
              </div>
              <div>
                CHECKOUT <br />Add date
              </div>
            </div>
            <div className="guest-picker">
              <select>
                {[...Array(hotelData.guest_count)].map((_, i) => (
                  <option key={i}>{i + 1} guest{i !== 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <button className="button">Check availability</button>
            <a href="/" className="link">
              Report this listing
            </a>
          </div>
        </div>
      </div>
      <div className="descript">
        <p>
          Some info has automatically translated. <a href="/">link text</a>
        </p>
        <div>
          <p>{hotelData.description}</p>
        </div>
        <p>
          <a href="/">See More</a>
        </p>
      </div>
    </div>
  );
};

const HostInfo = ({ image, name, info }) => {
  return (
    <div className="left-side-1">
      <div className="profile-img">
        <img src={image} alt="" />
      </div>
      <div className="profile-info">
        <div>
          <p className="emp">{name}</p>
        </div>
        <div>
          {Array.isArray(info) ? (
            <ul>
              {info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{info}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
