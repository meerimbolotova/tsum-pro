import React from "react";
import "./TicketsDetails.css";

const TicketsDetails = () => {
  return (
    <div className="details">
      <div className="details-back">
        <div className="details-name">
          <span className="film-name">Элементарно</span>
          <div className="film-descr">
            <span className="film-age">0+</span>
            <div className="film-genre">
              <span className="genre-city">США</span>
              <span className="genre-list">
                Мультфильм, Фантастика, Фэнтези, Драма, Комедия, Приключения
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="back-blur">
        <div className="details-time">
          <div className="details-image">
            <img
              src="https://ic.p24.app/unsafe/540x800/filters:quality(80)/st.p24.app/static/posters/28183/86cdb6b6-de91-4f65-a28e-4f33f1e5d5c6.png?1685890057"
              alt=""
            />
          </div>
          <div className="details-navbar">ehnjj</div>
          <div style={{ display: "flex" }}>
            <h5 className="details-hall">Зал 3</h5>
            <div className="line">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsDetails;
