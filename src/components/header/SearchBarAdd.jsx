import React, { useState, useEffect, useRef } from "react";
import "./SearchBarAdd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CustomDateRangePicker from "./CustomCalendar";

const SearchBarAdd = () => {
  const [where, setWhere] = useState("");
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const [guests, setGuests] = useState("");
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [guestCounts, setGuestCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const searchBarRef = useRef(null);

  const handleDateRangeChange = (start, end) => {
    setCheckin(start ? start.toDateString() : "");
    setCheckout(end ? end.toDateString() : "");
  };

  const handleWhereClick = (event) => {
    event.stopPropagation();
    setShowRegionDropdown(true);
    setShowGuestDropdown(false);
    setShowCheckInPicker(false);
    setShowCheckOutPicker(false);
  };

  const handleRegionSelect = (region) => {
    setWhere(region);
    setShowRegionDropdown(false);
  };

  const handleGuestsClick = (event) => {
    event.stopPropagation();
    setShowGuestDropdown(true);
    setShowRegionDropdown(false);
    setShowCheckInPicker(false);
    setShowCheckOutPicker(false);
  };

  const updateGuestCount = (type, increment) => {
    setGuestCounts((prevCounts) => {
      const newCount = increment
        ? prevCounts[type] + 1
        : Math.max(0, prevCounts[type] - 1);
      const newCounts = { ...prevCounts, [type]: newCount };

      const totalGuests = newCounts.adults + newCounts.children;
      let guestText = `${totalGuests} guest${totalGuests !== 1 ? "s" : ""}`;
      if (newCounts.infants > 0) {
        guestText += `, ${newCounts.infants} infant${
          newCounts.infants !== 1 ? "s" : ""
        }`;
      }
      if (newCounts.pets > 0) {
        guestText += `, ${newCounts.pets} pet${
          newCounts.pets !== 1 ? "s" : ""
        }`;
      }
      setGuests(guestText);

      return newCounts;
    });
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowRegionDropdown(false);
      setShowGuestDropdown(false);

      // Don't close the calendar here
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCheckInClick = (event) => {
    event.stopPropagation();
    setShowCheckInPicker(true);
    setShowCheckOutPicker(false);
    setShowRegionDropdown(false);
    setShowGuestDropdown(false);
  };

  const handleCheckOutClick = (event) => {
    event.stopPropagation();
    setShowCheckOutPicker(true);
    setShowCheckInPicker(false);
    setShowRegionDropdown(false);
    setShowGuestDropdown(false);
  };

  return (
    <div id="search-bar-add" className="search-bar-add" ref={searchBarRef}>
      <input
        type="text"
        id="where-btn"
        placeholder="Where"
        readOnly
        value={where}
        onClick={handleWhereClick}
      />
      {showRegionDropdown && (
        <div className="region-dropdown">
          <h3>Search by region</h3>
          <div className="region-options">
            {[
              "flexible",
              "SoutheastAsia",
              "Canada",
              "Europe",
              "Thailand",
              "MiddleEast",
            ].map((region, index) => (
              <div
                className="region-option"
                onClick={() => handleRegionSelect(region)}
                key={index}
              >
                <img
                  src={`/${region.toLowerCase().replace(/ /g, "-")}.jpg`}
                  alt={`${region} map`}
                />
                <span>{region}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <input
        type="text"
        id="checkin-btn"
        placeholder="Check-in"
        value={checkin}
        onClick={handleCheckInClick}
        readOnly
      />
      {showCheckInPicker && (
        <CustomDateRangePicker
          onDateRangeChange={handleDateRangeChange}
          isCheckIn={true}
        />
      )}
      <input
        type="text"
        id="checkout-btn"
        placeholder="Check-out"
        value={checkout}
        onClick={handleCheckOutClick}
        readOnly
      />
      {showCheckOutPicker && (
        <CustomDateRangePicker
          onDateRangeChange={handleDateRangeChange}
          isCheckIn={false}
        />
      )}

      <input
        type="text"
        id="guests-btn"
        placeholder="Add guest"
        value={guests}
        onClick={handleGuestsClick}
        readOnly
      />

      {showGuestDropdown && (
        <div id="guest-dropdown" className="guest-dropdown">
          {["adults", "children", "infants", "pets"].map((category, index) => (
            <div className="guest-category" key={index}>
              <div className="category-info">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <p>
                  {category === "adults"
                    ? "Ages 13 or above"
                    : category === "children"
                    ? "Ages 2-12"
                    : category === "infants"
                    ? "Under 2"
                    : "Bringing a service animal?"}
                </p>
              </div>
              <div className="counter">
                <button
                  className="decrement"
                  onClick={() => updateGuestCount(category, false)}
                  disabled={guestCounts[category] === 0}
                >
                  -
                </button>
                <span className="count">{guestCounts[category]}</span>
                <button
                  className="increment"
                  onClick={() => updateGuestCount(category, true)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button type="submit" className="search-button" id="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBarAdd;
