import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-con">
      <hr />
      <div className="breadcrumb">Peru > Lima Province > Jesús María</div>
      <h2>Explore other options in and around Lima</h2>
      <div className="footer-ele">
        <div className="options-container">
          {[
            "Cieneguilla",
            "Punta Hermosa",
            "Asia",
            "Chaclacayo",
            "Barranco",
            "Santiago de Surco",
            "San Isidro",
            "San Miguel",
            "Lunahuaná",
          ].map((location) => (
            <div className="option" key={location}>
              <div className="option-name">{location}</div>
              <div className="option-type">Vacation rentals</div>
            </div>
          ))}
        </div>
        <hr />
        <h2>Other types of stays on Airbnb</h2>
        <div className="stays-container">
          {[
            "Jesús María vacation rentals",
            "Jesús María monthly stays",
            "Apartment vacation rentals in Jesús María",
            "Apartment vacation rentals in Lima Province",
          ].map((stay) => (
            <div className="stay" key={stay}>
              <div className="stay-name">{stay}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
