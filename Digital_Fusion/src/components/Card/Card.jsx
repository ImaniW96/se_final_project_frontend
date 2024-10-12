import "../Card/Card.css";
import React, { useState } from "react";
import { cardData } from "../../utils/constants";
import Popup from "../PopupForm/Popup";

export function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openPopup = (card) => {
    console.log("Current content:", cardData);
    setModalContent(card);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setModalContent("");
  };

  return (
    <main>
      <div className="card__container">
        {cardData.map((card) => (
          <div className="card" key={card.id} onClick={() => openPopup(card)}>
            <img
              src={card.image}
              className="card__image"
              alt={card.description}
            />
            <h1 className="card__title">{card.title}</h1>
            <div className="card__description">{card.description}</div>
          </div>
        ))}
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} cardData={modalContent} />
    </main>
  );
}
