import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <>
      <div className="box"></div>
      <div className="feedback-container">
        <div className="feedback-text">
          <h2>Обратная связь</h2>
          <h3>
            Просим не высылать многократно запрос, абсолютно все запросы
            обрабатываются в порядке очереди и это требует времени.
          </h3>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              margin: "auto",
            }}
          >
            <div style={{ display: "flex", marginBottom: "2%" }}>
              <input type="checkbox" style={{ width: "30px" }} />
              <h5 style={{ color: "white", textAlign: "center" }}>
                Я принимаю условия пользовательского соглашения
              </h5>
            </div>

            <button
              style={{
                width: "50%",
                alignSelf: "center",
                marginBottom: "2%",
                backgroundColor: "#d39742",
                border: "none",
                borderRadius: "15px",
                color: "white",
                fontSize: "1.1em",
                fontWeight: "bold",
              }}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
