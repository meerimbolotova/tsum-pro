import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer">
        <div className="footer-sett">
          <div className="main-footer">
            <div className="footer-left">
              <div className="footer-left-ul">
                <ul className="ul-footer">
                  <li>Основное</li>
                  <li onClick={() => navigate("/")}>Главная</li>
                  <li>Акции</li>
                  <li onClick={() => navigate("/contact")}>Контакты</li>
                </ul>
              </div>
              <div className="footer-left-ul">
                <ul className="ul-footer">
                  <li>Зрителям</li>
                  <li onClick={() => navigate("/ticketrefund")}>
                    Возврат билетов
                  </li>
                  <li onClick={() => navigate("/feedback")}>Обратная связь</li>
                </ul>
              </div>
            </div>
            <div className="footer-right">
              <div>
                <h3>Способы оплаты</h3>
              </div>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className="end-footer">
            <div>
              <h4>TSUM cinema © 2023</h4>
            </div>
            <div>
              <h4>Powered by p24.app</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
