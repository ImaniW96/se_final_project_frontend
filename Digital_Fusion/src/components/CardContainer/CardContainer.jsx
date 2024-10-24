import React, { Children, useState } from "react";
import { cardData } from "../../utils/constants";
import Popup from "../PopupForm/Popup";
import { Card } from "../Card/Card";
export function CardContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openPopup = (card) => {
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
          <Card key={card.id} card={card} openPopup={openPopup}></Card>
        ))}
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} cardData={modalContent} />
    </main>
  );
}
