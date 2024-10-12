import React from "react";
import "./Popup.css"; // Create a CSS file for styling

const Popup = ({ isOpen, onClose, cardData }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        {cardData && (
          <div className="popup-content">
            <img
              src={cardData.image}
              alt={cardData.title}
              className="popup__image"
            />
            <h1 className="popup__title">{cardData.title}</h1>
            <p className="popup__description">{cardData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
