import "../Card/Card.css";
export function Card({ card, openPopup }) {
  return (
    <div className="card" onClick={() => openPopup(card)}>
      <img src={card.image} className="card__image" alt={card.title} />
      <h1 className="card__title">{card.title}</h1>
      <div className="card__description">{card.description}</div>
    </div>
  );
}
