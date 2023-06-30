import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
      <section class="notFound">
        <div class="img">
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
        </div>
        <div class="text">
          <h2 className="notfpage_404">404</h2>
          <h3 className="notfpage_text">PAGE NOT FOUND</h3>
          <h3 className="notfpage_text">BACK TO HOME?</h3>
          <button class="yes" onClick={() => navigate("/")}>
            YES
          </button>
          <div class="m-initialScene-text"></div>
          <div>
            <p>Таймер обратного отсчета</p>
            <p>Осталось секунд</p>
          </div>
          ;
        </div>
      </section>
    </div>
  );
};
export default NotFoundPage;
