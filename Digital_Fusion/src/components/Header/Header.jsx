import "../Header/Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="header__content">
        <button className="header__logo" onClick={() => navigate("/")}>
          Digital Fusion
        </button>
        <button className="header__hamburger" onClick={toggleModal}>
          ☰
        </button>
        {isModalOpen && (
          <div className="header__dropdown_modal">
            <div className="header__modal_content">
              <button className="header__modal_close" onClick={closeModal}>
                &times; {/* Close icon */}
              </button>
              <button className="header__item" onClick={() => navigate("/")}>
                Home
              </button>
              <button
                className="header__item"
                onClick={() => navigate("/Mentor")}
              >
                Become a Mentor
              </button>
              <button
                className="header__item"
                onClick={() => navigate("/Community")}
              >
                Community
              </button>
              <button
                className="header__item"
                onClick={() => navigate("/UxDesign")}
              >
                Ux Design
              </button>
              <button
                className="header__item"
                onClick={() => navigate("/SoftwareEngineer")}
              >
                Software Engineering
              </button>
              <button
                className="header__item"
                onClick={() => navigate("/Marketing")}
              >
                Marketing
              </button>
              <button
                className="header__item"
                onClick={() => navigate("/AboutUs")}
              >
                About Us
              </button>
              <button
                className="header__item"
                onClick={() => navigate("/TechNews")}
              >
                News
              </button>
              <button
                className="header__item"
                onClick={() => navigate("/Donate")}
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
