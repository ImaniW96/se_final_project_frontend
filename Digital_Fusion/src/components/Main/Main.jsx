import "../Main/Main.css";
import HeaderImage from "../../assets/HeaderImage.png";
import { Card } from "../Card/Card";
export function Main() {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <h1 className="main__text">Bring your Dreams to life</h1>
          <img src={HeaderImage} className="main__image" />
        </div>
        <section className="main__card_conatiner">
          <Card />
        </section>
      </div>
    </>
  );
}
