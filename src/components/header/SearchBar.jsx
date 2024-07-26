import React, { useState, useEffect, useRef } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faUser,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import SearchBarAdd from "./SearchBarAdd";

const SearchBar = () => {
  const [showSearchBarAdd, setShowSearchBarAdd] = useState(false);
  const wrapperRef = useRef(null);

  const handleButtonClick = () => {
    setShowSearchBarAdd(true);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowSearchBarAdd(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex-container">
        <div id="main-search-bar" className="search-bar">
          <button type="button" className="btn" onClick={handleButtonClick}>
            Anywhere
          </button>
          <button type="button" className="btn" onClick={handleButtonClick}>
            Any Week
          </button>
          <button type="button" className="btn-r" onClick={handleButtonClick}>
            Add Guest
          </button>
          <button
            type="submit"
            className="search-button"
            id="search-btn"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="profile-container">
          <div className="globe-i">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className="profile">
            <FontAwesomeIcon icon={faBars} className="menu-icon" />
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
          </div>
        </div>
      </div>
      {showSearchBarAdd && (
        <div ref={wrapperRef}>
          <SearchBarAdd />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
