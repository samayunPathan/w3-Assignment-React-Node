import React, { useState, useEffect } from "react";
import "./Imggallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faHeart,
  faCopy,
  faEnvelope,
  faMessage,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import ShareSaveCon from "./ShareSaveCon";

const ComfyApartment = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullscreenGallery, setShowFullscreenGallery] = useState(false);


  const images = [
    "../room1.jpg",
    "../room2.jpg",
    "../room3.jpeg",
    "../room4.jpeg",
  ];

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
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };



  return (
    <div className="main">
       <h1>Comfy New Apt. in Pueblo Libre!</h1>
      <ShareSaveCon/>

      <div className="image-gallery">
        <div className="main-image">
          <img src="/room1.jpg" alt="Bedroom" />
        </div>
        <div className="secondary-images">
          <div className="top-row">
            <div>
              <img src="/room2.jpg" alt="Living Room" />
            </div>
            <div>
              <img src="/room2.jpg" alt="Living Room" />
            </div>
          </div>
          <div className="bottom-row">
            <div>
              <img src="/room2.jpg" alt="Living Room" />
            </div>
            <div>
              <img src="/room2.jpg" alt="Living Room" />
            </div>
          </div>
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
              <img
                src={images[currentImageIndex]}
                alt=""
                className="fullscreen-image"
              />
            </div>
            <button className="next-image" onClick={showNextImage}>
              &gt;
            </button>
          </div>
          <div className="image-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
      
      
    
        </div>
      )}
    </div>
  );
};

export default ComfyApartment;
