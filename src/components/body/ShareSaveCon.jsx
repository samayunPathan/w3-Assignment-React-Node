
import './ShareSave.css'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faHeart,
  faCopy,
  faEnvelope,
  faMessage,
  faCode,
} from "@fortawesome/free-solid-svg-icons";


const ShareSaveCon = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLiked, setIsLiked] = useState(
    localStorage.getItem("isLiked") === "true"
  );
    const toggleLike = () => {
        const newLikeState = !isLiked;
        setIsLiked(newLikeState);
        localStorage.setItem("isLiked", newLikeState);
      };
    
      const copyLink = () => {
        const currentPageUrl = window.location.href;
        navigator.clipboard.writeText(currentPageUrl).then(() => {
          alert("Link copied to clipboard!");
        });
      };
      const handleShareButtonClick = () => {
        setShowModal(true);
      };
  return (
    <div>
    <div className="listing-header">
        <div className="listing-actions">
          <button
            id="shareButton"
            className="action-button"
            onClick={handleShareButtonClick}
          >
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <span className="button-text"> Share</span>
          </button>
          <button
            id="heartButton"
            className="action-button"
            onClick={toggleLike}
          >
            <FontAwesomeIcon
              icon={isLiked ? faHeart : faHeart}
              id="heartIcon"
              className={isLiked ? "active" : ""}
            />
            <span className="button-text"> Save</span>
          </button>
        </div>
        {showModal && (
        <div
          id="shareModal"
          className="modal"
          onClick={() => setShowModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Share this place</h2>
            <p>Rental unit in Lima · ★New · 1 bedroom · 1 bed · 1 bath</p>
            <div className="share-options">
              <button id="copyLinkBtn" onClick={copyLink}>
                <FontAwesomeIcon icon={faCopy} /> Copy Link
              </button>
              <button>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </button>
              <button>
                <FontAwesomeIcon icon={faMessage} /> Messages
              </button>
              <button>
                <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" />{" "}
                Messenger
              </button>
              <button>
                <FontAwesomeIcon icon="fa-brands fa-twitter" /> Twitter
              </button>
              <button>
                <FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook
              </button>
              <button>
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> Whatsapp
              </button>
              <button>
                <FontAwesomeIcon icon={faCode} /> Embed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default ShareSaveCon