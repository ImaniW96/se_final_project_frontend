import "../Main/Main.css";
import React from "react";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
export function Main() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollEffect = () => {
    if (window.scrollY > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEffect);
    return () => {
      window.removeEventListener("scroll", handleScrollEffect);
    };
  }, [handleScrollEffect]);

  return (
    <>
      <div className="main">
        <div className="main__container">
          <h1 className="main__text">Bring your Dreams to life</h1>
        </div>
        <h1 className={`main__header ${isScrolled ? "visible" : "hidden"}`}>
          How it works
        </h1>
        <section className="main__card_conatiner">
          <Card />
        </section>
      </div>
    </>
  );
}
