import React, { useEffect } from "react";
import "./Navbar.css";
import "./NavbarAdaptive.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, logout } from "../../auth/authAction";
import { ADMIN } from "../../helpers/consts";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuth());
  }, [localStorage.getItem("token")]);

  console.log(user);
  console.log(ADMIN);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-logo" onClick={() => navigate("/")}>
            <img
              style={{ width: "80px" }}
              src="https://my.p24.app/files/52a3e2cd-dac5-4d00-b296-3c84d33a4377.svg"
              alt="logo"
            />
          </div>
          <div className="navbar-right">
            {user ? (
              <>
                <a
                  className="navbar-a"
                  onClick={() => dispatch(logout(navigate))}
                >
                  Выйти
                </a>
                {user === ADMIN && (
                  <a className="navbar-a" onClick={() => navigate("/admin")}>
                    Админ
                  </a>
                )}
              </>
            ) : (
              <a className="navbar-a" onClick={() => navigate("/login")}>
                Войти
              </a>
            )}

            <a className="navbar-a"> Сеансы</a>
            <a className="navbar-a"> Афиша</a>
            <a className="navbar-a" onClick={() => navigate("/contact")}>
              {" "}
              О нас
            </a>
            <a className="navbar-a"> 0500 000 005</a>
          </div>
          {/* ====== Start BURGER ========= */}
          <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
            <ul class="menu__box">
              {/* =============== */}
              {user ? (
                <>
                  <li>
                    <a
                      className="menu__item"
                      onClick={() => dispatch(logout(navigate))}
                    >
                      Выйти
                    </a>
                  </li>
                  {user === ADMIN && (
                    <li>
                      <a
                        className="menu__item"
                        onClick={() => navigate("/admin")}
                      >
                        Админ
                      </a>
                    </li>
                  )}
                </>
              ) : (
                <li>
                  <a className="menu__item" onClick={() => navigate("/login")}>
                    Войти
                  </a>
                </li>
              )}
              {/* =============== */}

              <li>
                <a class="menu__item" href="#">
                  Сеансы
                </a>
              </li>
              <li>
                <a class="menu__item" href="#">
                  Афиша
                </a>
              </li>
              <li>
                <a class="menu__item" onClick={() => navigate("/contact")}>
                  {" "}
                  О нас
                </a>
              </li>
              <li>
                <a class="menu__item" href="#">
                  0500 000 005
                </a>
              </li>
            </ul>
          </div>

          {/* ========= End Burger =========== */}
        </div>

        <div className="navbar-bord"></div>
      </div>
    </>
  );
};

export default Navbar;
