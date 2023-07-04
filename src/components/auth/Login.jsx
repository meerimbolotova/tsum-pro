import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../auth/authAction";
import "./Login.css";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    dispatch(login({ formData, navigate, username }));
  };

  const error = useSelector((state) => state.auth.error);
  console.log(error);

  return (
    <div className="login-container">
      <div className="Box"></div>
      <div className="login-form">
        <h2 className="login-title">Авторизация</h2>
        <input
          className="login-inp"
          placeholder="username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error.username ? (
          <h5 className="login-error">{error.username[0]}</h5>
        ) : (
          ""
        )}
        <input
          className="login-inp"
          placeholder="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password ? (
          <h5 className="login-error">{error.password[0]}</h5>
        ) : (
          ""
        )}

        {error.detail ? <h5 className="login-error"> {error.detail} </h5> : ""}

        <button className="login-singin-btn" onClick={handleSubmit}>
          Войти
        </button>
        <div className="login-block-btns">
          <button className="login-btns" onClick={() => navigate("/register")}>
            Регистрация
          </button>
          <button
            className="login-btns"
            onClick={() => navigate("/resetpassword")}
          >
            Забыли пароль?
          </button>
        </div>
      </div>
    </div>
  );
}
