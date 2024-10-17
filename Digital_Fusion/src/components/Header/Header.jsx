// import "../Header/Header.css";
// import { useNavigate } from "react-router-dom";
// export function Header() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <header className="header">
//         <ul className="header__item_container">
//           <div>
//             {" "}
//             <button className="header__logo" onClick={() => navigate("/")}>
//               {" "}
//               Digital Fusion
//             </button>
//           </div>
//           <button className="header__item" onClick={() => navigate("/Mentor")}>
//             Become a Mentor
//           </button>

//           <button
//             className="header__item"
//             onClick={() => navigate("/Community")}
//           >
//             Community
//           </button>
//           <button
//             className="header__item"
//             onClick={() => navigate("/UxDesign")}
//           >
//             Ux Design
//           </button>
//           <button
//             className="header__item"
//             onClick={() => navigate("/SoftwareEngineer")}
//           >
//             Software Engineering
//           </button>
//           <button
//             className="header__item"
//             onClick={() => navigate("/Marketing")}
//           >
//             Marketing
//           </button>
//           <button className="header__item" onClick={() => navigate("/Aboutus")}>
//             About Us
//           </button>

//           <button
//             className="header__item"
//             onClick={() => navigate("/TechNews")}
//           >
//             Tech News
//           </button>

//           <button className="header__item" onClick={() => navigate("/Donate")}>
//             Donate
//           </button>
//         </ul>
//       </header>
//     </>
//   );
// }
import "../Header/Header.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <ul className="header__item_container">
          <button className="header__logo" onClick={() => navigate("/")}>
            Digital Fusion
          </button>
          <div className="header__menu">
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
              onClick={() => navigate("/Aboutus")}
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
        </ul>
      </header>
    </>
  );
}
