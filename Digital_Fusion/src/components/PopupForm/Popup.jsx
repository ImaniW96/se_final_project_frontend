import React from "react";
import "./Popup.css"; // Create a CSS file for styling

const Popup = ({ isOpen, onClose, currentContent }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">{currentContent}</div>
      </div>
    </div>
  );
};

export default Popup;
