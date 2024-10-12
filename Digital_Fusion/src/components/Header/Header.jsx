import "../Header/Header.css";
// import { Community } from "../Community/Community";
// import React, { useState, useEffect, useRef } from "react";
export function Header() {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const toggleDropDown = () => {
  //     setIsOpen((prev) => !prev);
  //   };
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  return (
    <>
      <header className="header">
        {/* <div className="header__dropdown">
          <button onClick={toggleDropDown}>=</button>
        </div> */}

        <ul className="header__item_container">
          <button className="header__item">Become a Mentor</button>
          <button className="header__item">Community</button>
          <button className="header__item">Ux Design</button>
          <button className="header__item">Software Engineering</button>
          <button className="header__item">Marketing</button>
          <button className="header__item">About Us</button>
          <button className="header__item">Tech News</button>
          <button className="header__item">Donate</button>
        </ul>
      </header>
    </>
  );
}
