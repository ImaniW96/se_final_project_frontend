// import "../Card/Card.css";
// import React, { useState } from "react";
// import { cardData } from "../../utils/constants";
// import Popup from "../PopupForm/Popup";
// export function Card() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [modalContent, setModalContent] = useState("");

//   const openPopup = (currentContent) => {
//     setModalContent(currentContent);
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
//           <div className="card" key={card.id}>
//             <div>
//               <img
//                 src={card.image}
//                 className="card__image"
//                 alt={card.description}
//               />
//               <h1 className="card__title">{card.title}</h1>
//               <div className="card__description">{card.description}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Popup
//         isOpen={isOpen}
//         onClose={closePopup}
//         currentContent={modalContent}
//       />
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

  const openPopup = (currentContent) => {
    setModalContent(currentContent);
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
          <div
            className="card"
            key={card.id}
            onClick={() => openPopup(card.description)}
          >
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
      <Popup
        isOpen={isOpen}
        onClose={closePopup}
        currentContent={modalContent}
      />
    </main>
  );
}
