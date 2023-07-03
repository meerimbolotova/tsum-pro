import React, { useState } from "react";
import "./TicketsDetails.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../../stores/cards/cart/cartSlice";

const TicketsDetails = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const seats = () => {
    let arr = [];
    for (let i = 10; i > 0; i--) {
      arr.push(i);
    }
    return arr;
  };
  const seats2 = () => {
    let arr2 = [];
    for (let i = 7; i > 0; i--) {
      arr2.push(i);
    }
    return arr2;
  };
  // cart-start---------------------------------------------------
  const dispatch = useDispatch();
  const [seatArr, setSeatArr] = useState([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify({ hall: [] }));
      cart = { hall: [] };
    }
    setSeatArr([]);
    dispatch(getCart(cart));
  }, [show]);

  const addHall = (seat, row) => {
    let newSeat = {
      item: seat,
      row: row,
    };

    //  seatArr.push(newSeat) ;
    let seatFind = seatArr.filter(
      (elem) => elem.item === seat && elem.row === row
    );
    if (seatFind.length === 0) {
      seatArr.push(newSeat);
    } else {
      seatArr.splice(seatArr.indexOf(newSeat), 1);
    }
    console.log(seatArr);
  };
  const addToCart = (seatCart) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify({ hall: [] }));
      cart = { hall: [] };
    }
    seatCart.map((elem) => {
      cart.hall.push(elem);
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    setSeatArr([]);
  };
  // cart-end-----------------------------------------------
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
            <div className="details-youtube" onClick={() => setModal(true)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
                alt=""
              />
            </div>
            {modal ? (
              <div className="details-video">
                <iframe
                  width="860"
                  height="515"
                  src="https://www.youtube.com/embed/ls7SJ7jneJo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <button
                  className="close-video-btn"
                  onClick={() => setModal(false)}
                >
                  X
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="details-navbar">
            <div className="details-main-navbar">
              <div className="details-days">
                <div className="details-today days">
                  <h5>Сегодня</h5>
                  <span>27 июня</span>
                </div>
                <div className="details-tomorrow days">
                  <h5>Завтра</h5>
                  <span>28 июня</span>
                </div>
              </div>
              <div className="details-3d">
                <span>3D</span>
              </div>
            </div>
            <div className="details-bord-navbar"></div>
          </div>
          <div className="halls">
            <h5 className="details-hall">Зал 3</h5>
            <div className="line">
              <span></span>
            </div>
          </div>
          <div className="time-container">
            <div className="time-block">
              {/* <div className="time">10:15</div> */}
              {/* ============================================= */}

              <div className="time" onClick={() => setShow(true)}>
                10:15
              </div>
              {show ? (
                <div className="modal-place">
                  <button
                    className="modal-btn-setShow"
                    onClick={() => setShow(false)}
                  >
                    close
                  </button>
                  <button onClick={() => addToCart(seatArr)}>Buy</button>
                  <div className="modal-place-block">
                    <div className="modal-btn-places">
                      {seats().map((item) => (
                        <button
                          className="modal-buttons"
                          onClick={() => {
                            const row = 1;
                            addHall(item, row);
                      
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="modal-btn-places">
                      {seats().map((item) => (
                        <button
                          className="modal-buttons"
                          onClick={() => {
                            // setRow(2);
                            addHall(item);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="modal-btn-places">
                      {seats().map((item) => (
                        <button
                          className="modal-buttons"
                          onClick={() => {
                            // setRow(3);
                            addHall(item);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>{" "}
                    <div className="modal-btn-places">
                      {seats2().map((item) => (
                        <button
                          className="modal-buttons"
                          onClick={() => {
                            const row = 4;
                            addHall(item, row);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>{" "}
                    <div className="modal-btn-places">
                      {seats2().map((item) => (
                        <button
                          className="modal-buttons"
                          onClick={() => {
                            // setRow(5);
                            addHall(item);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="modal-btn-places">
                      {seats2().map((item) => (
                        <button
                          className="modal-buttons"
                          onClick={() => {
                            // setRow(6);
                            addHall(item);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="modal-btn-places">
                      {" "}
                      1
                      {seats().map((item) => (
                        <button
                          className="modal-buttons"
                          onClick={() => {
                            // setRow(7);
                            addHall(item);
                          }}
                        >
                          {item}
                        </button>
                      ))}{" "}
                      1
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {/* ============================================= */}
              <div className="price-cont">
                <span className="price">350c</span>
                <br />
                <span className="visual">3D</span>
              </div>
            </div>
            <div className="time-block">
              <div className="time">12:15</div>
              <div className="price-cont">
                <span className="price">350c</span>
                <br />
                <span className="visual">3D</span>
              </div>
            </div>
            <div className="time-block">
              <div className="time">14:15</div>
              <div className="price-cont">
                <span className="price">350c</span>
                <br />
                <span className="visual">3D</span>
              </div>
            </div>
            <div className="time-block">
              <div className="time">16:15</div>
              <div className="price-cont">
                <span className="price">350c</span>
                <br />
                <span className="visual">3D</span>
              </div>
            </div>
          </div>
        </div>
        <div className="films-details">
          <ul className="details-list">
            <li className="list-item">
              <div className="list-titles">В прокате с </div>
              <span className="list-values">15 июня </span>
            </li>
            <li className="list-item">
              <div className="list-titles">Хронометраж </div>
              <span className="list-values">
                1 час 33 минуты(+21 мин. ролики){" "}
              </span>
            </li>
            <li className="list-item">
              <div className="list-titles">Режиссер </div>
              <span className="list-values">Питер Сон</span>
            </li>
            <li className="list-item">
              <div className="list-titles">В ролях </div>
              <span className="list-values">
                Леа Льюис, Мамуду Ати, Роналдо Дель Кармен, Шила Омми, Венди
                Маклендон-Кови, Кэтрин О’Хара, Джо Пера, Мэттью Ян Кинг,
                Инносент Экакити
              </span>
            </li>

            <span className="list-values" style={{ fontSize: "1.5vw" }}>
              В Городе Стихий обитатели огня, воды, земли и воздуха живут
              вместе. У сильной и вспыльчивой Эмбер завязывается дружба с
              расслабленным, плывущим по течению Уэйдом — дружба, которая бросит
              вызов её представлениям о мире вокруг.
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TicketsDetails;
