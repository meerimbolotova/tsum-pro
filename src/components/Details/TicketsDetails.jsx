import React, { useState } from "react";
import "./TicketsDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../stores/cart/cartSlice";

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
    for (let i = 8; i > 0; i--) {
      arr2.push(i);
    }
    return arr2;
  };
  // cart-start---------------------------------------------------
  const dispatch = useDispatch();
  const [seatArr, setSeatArr] = useState([]);
  // const { hall } = useSelector((state) => state.cart.cart);
  // console.log(hall);
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify({ hall: [] }));
      cart = { hall: [] };
    }
    setSeatArr([]);
    dispatch(getCart(cart));
    greenBtns();
  }, [show]);
  function greenBtns() {
    if (show) {
      // console.log(hall);
      let cart = JSON.parse(localStorage.getItem("cart"));

      cart.hall?.map((elem) => {
        let id = String(elem.row) + String(elem.item);
        console.log(id);
        console.log(document.getElementById(`${id}`));
        document.getElementById(`${id}`).className = "modal-buttons-green";
      });
    }
  }

  const addHall = (seat, row) => {
    let newSeat = {
      item: seat,
      row: row,
      price: 350,
    };
    let id = String(row) + seat;
    let seatFind = seatArr.filter(
      (elem) => elem.item === seat && elem.row === row
    );
    if (seatFind.length === 0) {
      seatArr.push(newSeat);
      document.getElementById(`${id}`).className = "modal-buttons-red";
    } else {
      seatArr.splice(seatArr.indexOf(newSeat), 1);
      document.getElementById(`${id}`).className = "modal-buttons";
    }

    // console.log(seatArr);
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
    dispatch(getCart(cart));
    greenBtns();
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
                  <button onClick={() => addToCart(seatArr)}>buy</button>
                  <div className="modal-place-block">
                    <div className="modal-btn-places">
                      {" "}
                      <div className="modal-row">1</div>
                      {seats().map((item) => (
                        <button
                          className="modal-buttons"
                          id={"1" + item}
                          onClick={() => {
                            const row = 1;
                            addHall(item, row);
                          }}
                        >
                          {item}
                        </button>
                      ))}{" "}
                      <div className="modal-rows">1</div>
                    </div>
                    <div className="modal-btn-places">
                      <div className="modal-row">2</div>
                      {seats().map((item) => (
                        <button
                          className="modal-buttons"
                          id={"2" + item}
                          onClick={() => {
                            const row = 2;
                            addHall(item, row);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                      <div className="modal-rows">2</div>
                    </div>
                    <div className="modal-btn-places">
                      <div className="modal-row">3</div>

                      {seats().map((item) => (
                        <button
                          className="modal-buttons"
                          id={"3" + item}
                          onClick={() => {
                            const row = 3;
                            addHall(item, row);
                          }}
                          // className="modal-buttons-red"
                        >
                          {item}
                        </button>
                      ))}
                      <div className="modal-rows">3</div>
                    </div>{" "}
                    <div className="modal-btn-places2">
                      <div className="modal-row">4</div>
                      {seats2().map((item) => (
                        <button
                          className="modal-buttons"
                          id={"4" + item}
                          onClick={() => {
                            const row = 4;
                            addHall(item, row);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                      <div className="modal-rows">4</div>
                    </div>{" "}
                    <div className="modal-btn-places2">
                      <div className="modal-row">5</div>
                      {seats2().map((item) => (
                        <button
                          className="modal-buttons"
                          id={"5" + item}
                          onClick={() => {
                            const row = 5;
                            addHall(item, row);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                      <div className="modal-rows">5</div>
                    </div>
                    <div className="modal-btn-places2">
                      <div className="modal-row">6</div>
                      {seats2().map((item) => (
                        <button
                          className="modal-buttons"
                          id={"6" + item}
                          onClick={() => {
                            const row = 6;
                            addHall(item, row);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                      <div className="modal-rows">6</div>
                    </div>
                    <div className="modal-btn-places">
                      {" "}
                      <div className="modal-row">7</div>
                      {seats().map((item) => (
                        <button
                          className="modal-buttons"
                          id={"7" + item}
                          onClick={() => {
                            const row = 7;
                            addHall(item, row);
                          }}
                        >
                          {item}
                        </button>
                      ))}{" "}
                      <div className="modal-rows">7</div>
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
