import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import logo from "./images/icon-payment-mastercard.svg";
import logo1 from "./images/icon-payment-visa.svg";
import logo2 from "./images/icon-payment-elkart.svg";
import logo3 from "./images/icon-payment-odengi.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-left-ul">
              <ul className="ul-footer">
                <li className="footer-li-title">Основное</li>
                <li className="footer-li" onClick={() => navigate("/")}>
                  Главная
                </li>
                <li className="footer-li">Акции</li>
                <li className="footer-li" onClick={() => navigate("/contact")}>
                  Контакты
                </li>
              </ul>
            </div>
            <div className="footer-right-ul">
              <ul className="ul-footer">
                <li className="footer-li-title">Зрителям</li>
                <li
                  className="footer-li"
                  onClick={() => navigate("/ticketrefund")}
                >
                  Возврат билетов
                </li>
                <li className="footer-li" onClick={() => navigate("/feedback")}>
                  Обратная связь
                </li>
              </ul>
            </div>
          </div>
          {/* ===================== left/rigth ==================== */}
          <div className="footer-right">
            <div>
              <p className="footer-li-title">Способы оплаты</p>
            </div>
            <div className="footer-img">
              <img style={{ width: "40px" }} src={logo} alt="" />
              <img style={{ width: "60px" }} src={logo1} alt="" />
              <img style={{ width: "40px" }} src={logo2} alt="" />
              <img style={{ width: "60px" }} src={logo3} alt="" />
            </div>
          </div>
        </div>
        <div className="end-footer">
          <div className="footer-end-left">
            <h4 className="footer-end-text">TSUM cinema © 2023</h4>
          </div>
          <div className="footer-end-right">
            <h4 className="footer-end-text">Powered by p24.app</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
