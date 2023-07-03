import React, { useEffect } from "react";
import "./Home.css";
import Card from "./Card";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="home__container">
      <div className="qwer">
        <div className="swiper slider">
          <div className="swiper-wrapper slider__wrapper">
            <div className="swiper-slide slider-item">
              <div className="slider__layer back__photo"></div>
              <div className="slider__layer person"></div>
              <div className="slider__layer middle"></div>
              <div className="slider__layer front__photo"></div>
            </div>
          </div>
        </div>
      </div>

      <Card />
    </div>
  );
};

export default Home;
