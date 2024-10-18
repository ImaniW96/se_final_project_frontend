// import "../Card/Card.css";
// import React, { useState } from "react";
// import { cardData } from "../../utils/constants";
// import Popup from "../PopupForm/Popup";

// export function Card() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [modalContent, setModalContent] = useState("");

//   const openPopup = (card) => {
//     console.log("Current content:", cardData);
//     setModalContent(card);
//     setIsOpen(true);
//   };

//   const closePopup = () => {
//     setIsOpen(false);
//     setModalContent("");
//   };

//   return (
//     <main>
//       <div className="card__container">
//         {cardData.map((card) => (
//           <div className="card" key={card.id} onClick={() => openPopup(card)}>
//             <img
//               src={card.image}
//               className="card__image"
//               alt={card.description}
//             />
//             <h1 className="card__title">{card.title}</h1>
//             <div className="card__description">{card.description}</div>
//           </div>
//         ))}
//       </div>
//       <Popup isOpen={isOpen} onClose={closePopup} cardData={modalContent} />
//     </main>
//   );
// }
import "../Card/Card.css";
import React, { useState } from "react";
import { cardData } from "../../utils/constants";
import Popup from "../PopupForm/Popup";

export function Card() {
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

  // Function to truncate description
  const hideDescription = (description) => {
    const maxLines = 3; // Set the number of lines to show
    const lines = description.split("\n").slice(0, maxLines).join("\n");
    return lines + (description.split("\n").length > maxLines ? "..." : "");
  };

  return (
    <main>
      <div className="card__container">
        {cardData.map((card) => (
          <div className="card" key={card.id} onClick={() => openPopup(card)}>
            <img src={card.image} className="card__image" alt={card.title} />
            <h1 className="card__title">{card.title}</h1>
            <div className="card__description">
              {hideDescription(card.description)}
            </div>
          </div>
        ))}
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} cardData={modalContent} />
    </main>
  );
}
