import React, { useState } from "react";
import "./TicketsDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../stores/cart/cartSlice";
import { useParams } from "react-router-dom";
import { getOneCinema } from "../../stores/crud/crudAction";
import {
  getComments,
  getUser,
  postComments,
} from "../../stores/comments/commentActions";
import axios from "axios";

const TicketsDetails = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { oneCinema } = useSelector((state) => state.cinema);

  useEffect(() => {
    dispatch(getOneCinema(id));
    dispatch(getComments());
    dispatch(getUser());
    // setUserId(id);
  }, []);

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
  const { comments, userInfo } = useSelector((state) => state.comments);
  console.log(comments);
  console.log(userInfo);

  const [seatArr, setSeatArr] = useState([]);
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

  // comments-start--------------------------------
  const [content, setContent] = useState("");
  function addComment() {
    let obj = {
      content,
      movies: id,
      author: userInfo[0].id,
    };
    dispatch(postComments(obj));
    dispatch(getComments());
  }
  // comments-end--------------------------------

  return (
    <div className="details">
      <div className="details-back">
        <div className="details-name">
          <span className="film-name">{oneCinema?.title}</span>
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
            <img src={oneCinema?.image} alt="" />
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
                  src={oneCinema?.link}
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
                    X
                  </button>
                  <div className="modal-inner">
                    <div className="modal-inner-title">
                      <div className="inner-title-left">
                        <img src="" />
                        <h3>Indiana Jones</h3>
                      </div>
                      <div className="inner-title-right">
                        <h3>Zal 3</h3>
                        <h3>5 июля 18:00, сеанс 2 часа 22 мин.</h3>
                      </div>
                    </div>
                    <div className="modal-inner-info">
                      <div className="modal-inner-info">
                        {" "}
                        <div className="modal-inner-square-gray"></div>Стандарт
                        - 300 сом
                      </div>
                      <div className="modal-inner-info">
                        {" "}
                        <div className="modal-inner-square-red"></div>Выбрано
                      </div>
                      <div className="modal-inner-info">
                        {" "}
                        <div className="modal-inner-square-yellow"></div>Занято
                      </div>
                    </div>
                    <div className="modal-inner-monitor"></div>

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
                        <div className="modar-row-btn">
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
                        </div>
                        <div className="modal-rows">4</div>
                      </div>{" "}
                      {/* ======= начало пятый ряд ======= */}
                      <div className="modal-btn-places2">
                        <div className="modal-row">5</div>
                        <div className="modar-row-btn">
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
                        </div>
                        <div className="modal-rows">5</div>
                      </div>
                      {/* ======= конец пятый ряд ======= */}
                      <div className="modal-btn-places2">
                        <div className="modal-row">6</div>
                        <div className="modar-row-btn">
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
                        </div>
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
                    {/* ======== НАЧАЛО блок выбранных мест и сумма к оплате ======== */}
                    <div className="modal-inner-info2">
                      <div className="modal-inner-price">
                        <div className="modal-inner-seats">мест: 5</div>
                        <div className="modal-inner-total">
                          {" "}
                          итого: 1200 cом
                        </div>
                      </div>
                      <div className="modal-inner-button-place">
                        <button
                          className="modal-inner-button"
                          onClick={() => addToCart(seatArr)}
                        >
                          КУПИТЬ
                        </button>
                      </div>
                    </div>
                    {/* ======== КОНЕЦ блок выбранных мест и сумма к оплате ======== */}
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div className="price-cont">
                <span className="price">{oneCinema?.price}c</span>
                <br />
                <span className="visual">3D</span>
              </div>
            </div>
            <div className="time-block">
              <div className="time">12:15</div>
              <div className="price-cont">
                <span className="price">{oneCinema?.price}c</span>
                <br />
                <span className="visual">3D</span>
              </div>
            </div>
            <div className="time-block">
              <div className="time">14:15</div>
              <div className="price-cont">
                <span className="price">{oneCinema?.price}c</span>
                <br />
                <span className="visual">3D</span>
              </div>
            </div>
            <div className="time-block">
              <div className="time">16:15</div>
              <div className="price-cont">
                <span className="price">{oneCinema?.price}c</span>
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
              <span className="list-values">{oneCinema?.release_date}</span>
            </li>
            <li className="list-item">
              <div className="list-titles">Хронометраж </div>
              <span className="list-values">{oneCinema?.duration}</span>
            </li>
            <li className="list-item">
              <div className="list-titles">Режиссер </div>
              <span className="list-values">{oneCinema?.director}</span>
            </li>
            <li className="list-item">
              <div className="list-titles">В ролях </div>
              <span className="list-values">{oneCinema?.cast}</span>
            </li>

            <span className="list-values" style={{ fontSize: "1.5vw" }}>
              {oneCinema?.description}
            </span>
          </ul>
          {/* comment------ */}
          <div className="comment-block">
            {comments.map((elem) => {
              if (id == elem.movies) {
                return (
                  <div key={elem.timestamp} className="comments">
                    <span>
                      {userInfo[0].username}: {elem.content}
                    </span>
                    <span>{elem.timestamp}</span>
                  </div>
                );
              }
            })}
            <input
              value={content}
              type="text"
              placeholder="комментарий"
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={addComment}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsDetails;
