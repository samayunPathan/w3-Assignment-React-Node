import React, { useState, useEffect } from "react";
import "./Imggallery.css";
import {Img} from 'react-image'
import ShareSaveCon from "./ShareSaveCon";

const ComfyApartment = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullscreenGallery, setShowFullscreenGallery] = useState(false);
  const [hotelImages, setHotelImages] = useState([]);
  const [hotelTitle, setHotelTitle] = useState("");
  

  const SERVER_BASE_URL = 'http://localhost:3001';

  useEffect(() => {
    fetch('http://localhost:3001/hotels/Hotel-Radisson-Blu')
      .then(response => response.json())
      .then(data => {
        const fullImageUrls = data.images.map(imagePath => `${SERVER_BASE_URL}${imagePath}`);
        setHotelImages(fullImageUrls);
        console.log(fullImageUrls);
        setHotelTitle(data.title || "Comfy New Apt. in Pueblo Libre!");
      })
      .catch(error => console.error('Error fetching hotel data:', error));
  }, []);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showFullscreenGallery) {
        if (e.key === "ArrowRight") {
          showNextImage();
        } else if (e.key === "ArrowLeft") {
          showPrevImage();
        } else if (e.key === "Escape") {
          setShowFullscreenGallery(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showFullscreenGallery]);

  useEffect(() => {
    hotelImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [hotelImages]);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotelImages.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + hotelImages.length) % hotelImages.length
    );
  };

  return (
    <div className="main">
      <h1 style={{color:"red"}}>{hotelTitle}</h1>
      <ShareSaveCon/>

      <div className="image-gallery">
        <div className="main-image">
          {hotelImages.length > 0 && (
            <Img src={hotelImages[0]} alt="Main Image" />
          )}
        </div>
        <div className="secondary-images">
          {hotelImages.length > 1 && (
            <>
              <div className="top-row">
                <div>
                  <img src={hotelImages[1]} alt="Secondary Image 1" />
                </div>
                {hotelImages.length > 2 && (
                  <div>
                    <img src={hotelImages[2]} alt="Secondary Image 2" />
                  </div>
                )}
              </div>
              <div className="bottom-row">
                {hotelImages.length > 3 && (
                  <>
                    <div>
                      <img src={hotelImages[3]} alt="Secondary Image 3" />
                    </div>
                    <div>
                      <img src={hotelImages[3]} alt="Secondary Image 4" />
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
        <button
          className="show-all"
          onClick={() => setShowFullscreenGallery(true)}
        >
          Show all photos
        </button>
      </div>

      {showFullscreenGallery && (
        <div className="fullscreen-gallery">
          <div className="ShareSave-con">
            <ShareSaveCon/>
          </div>
          
          <button
            className="close-gallery"
            onClick={() => setShowFullscreenGallery(false)}
          >
            &times;
          </button>
          <div className="gallery-content">
            <button className="prev-image" onClick={showPrevImage}>
              &lt;
            </button>
            <div className="fullscreen-image-container">
              {hotelImages.length > 0 && (
                <img
                  src={hotelImages[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  className="fullscreen-image"
                />
              )}
            </div>
            <button className="next-image" onClick={showNextImage}>
              &gt;
            </button>
          </div>
          <div className="image-counter">
            {currentImageIndex + 1} / {hotelImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComfyApartment;
