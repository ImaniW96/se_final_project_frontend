import "../Main/Main.css";
import HeaderImage from "../../assets/HeaderImage.png";
export function Main() {
  return (
    <>
      <div className="main">
        <img src={HeaderImage} className="main__image" />
      </div>
    </>
  );
}
