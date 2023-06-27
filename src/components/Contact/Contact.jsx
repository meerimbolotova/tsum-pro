import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="box"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.686474679603!2d74.61134877016701!3d42.87615279959249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cdbbae15%3A0xa6b565413fa531df!2sZUM%20Aichurok!5e0!3m2!1sen!2skg!4v1687722914760!5m2!1sen!2skg"
        style={{
          width: "100%",
          height: "600px",
          style: "border:0;",
          allowfullscreen: "",
          loading: "lazy",
          referrerpolicy: "no-referrer-when-downgrade",
        }}
      ></iframe>
      <div className="contact-form">
        <div className="contact-block">
          <div className="contact-block-inps">
            <input className="contact-inp" placeholder="имя" />
            <input className="contact-inp" placeholder="почта" />
            <input className="contact-inp" placeholder="телефон" />
          </div>
          <div className="contact-message">
            <textarea
              className="contact-inp-message"
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
  );
};

export default Contact;
