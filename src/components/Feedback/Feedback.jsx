import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <>
      <div className="box"></div>
      <div className="feedback-container">
        <div className="feedback-text">
          <h2>Обратная связь</h2>
          <p>
            Просим не высылать многократно запрос, абсолютно все запросы
            обрабатываются в порядке очереди и это требует времени.
          </p>
        </div>
        <div className="feedback-form">
          <div className="feedback-block">
            <div className="feedback-block-inps">
              <input className="feedback-inp" placeholder="имя" />
              <input className="feedback-inp" placeholder="почта" />
              <input className="feedback-inp" placeholder="телефон" />
            </div>
            <div className="feedback-message">
              <textarea
                className="feedback-inp-message"
                placeholder="сообщение"
              ></textarea>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <p>Я принимаю условия пользовательского соглашения</p>
          </div>
          <div>
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
