import "../Main/Main.css";
import React from "react";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import headerVideo from "../../assets/HeaderVideo.mp4";
export function Main() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    checkScroll();

    const interval = setInterval(checkScroll, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main">
        <div className="main__container">
          <video className="main__video" autoPlay loop muted playsInline>
            <source src={headerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="main__text">Bring your Dreams to life</h1>
        </div>
        <h2 className="main__paragraph">
          Collaborate with peers on real world project and get real world
          experince from industry professionals
        </h2>
        <h3 className={`main__header ${isScrolled ? "visible" : "hidden"}`}>
          How it works
        </h3>
        <section className="main__card_conatiner">
          <Card />
        </section>
      </div>
    </>
  );
}
