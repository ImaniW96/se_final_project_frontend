import "../Card/Card.css";

import { cardData } from "../../utils/constants";

export function Card() {
  return (
    <main>
      <div className="card__container">
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <div>
              
              <img
                src={card.image}
                className="card__image"
                alt={card.description}
              />
               <h1 className="card__title">{card.title}</h1>
              <div className="card__description">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
