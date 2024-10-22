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

  const hideDescription = (description) => {
    const maxLines = 3;
    const lines = description.split("\n").slice(0, maxLines).join("\n");
    return lines + (description.split("\n").length > maxLines ? "..." : "");
  };

  return (
    <main>
      <div className="card__container">
        {cardData.map((card) => (
          // <div className="card" key={card.id} onClick={() => openPopup(card)}>
          //   <img src={card.image} className="card__image" alt={card.title} />
          //   <h1 className="card__title">{card.title}</h1>
          //   <div className="card__description">
          //     {Children}
          //     {hideDescription(card.description)}
          //     <p>{hideDescription(card.description.paragraph1)}</p>
          //     <p>{hideDescription(card.description.paragraph2)}</p>
          //     <p>{hideDescription(card.description.paragraph3)}</p>
          //   </div>
          // </div>
          <Card key={card.id} card={card} openPopup={openPopup}></Card>
        ))}
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} cardData={modalContent} />
    </main>
  );
}

// description = (
//   <>
//     <p>at digital fusion...</p>
//     <p>...</p>
//   </>
// );

// function Card({ card }) {
//   return (
//     <div className="card" key={card.id} onClick={() => openPopup(card)}>
//       <img src={card.image} className="card__image" alt={card.title} />
//       <h1 className="card__title">{card.title}</h1>
//       <div className="card__description">{card.description}</div>
//     </div>
//   );
// }
