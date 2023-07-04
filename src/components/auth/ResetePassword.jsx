import React from "react";
import "./ResetePassword.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetpassword } from "../../auth/authAction";
import { useState } from "react";

const ResetePassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("email", email);

    dispatch(resetpassword({ formData, navigate }));
  };

  const error = useSelector((state) => state.auth.error);
  console.log(error);

  return (
    <div className="reset-container">
      <div className="Box"></div>
      <div className="reset-form">
        <h2 className="reset-title">Сброс пароля</h2>
        <span className="reset-text">
          Введите email и нажмите отправить для сброса пароля, далее проверьте
          почту.
        </span>
        <input
          className="reset-inp"
          placeholder="введите email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email ? <h5 className="reset-error">{error.email[0]}</h5> : ""}
        <button className="reset-btn" onClick={handleSubmit}>
          отправить
        </button>
      </div>
    </div>
  );
};
export default ResetePassword;
