import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../auth/authAction";
import "./Register.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setError } from "../../auth/authSlice";
import { useEffect } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    dispatch(register({ formData, navigate }));
  };

  const error = useSelector((state) => state.auth.error);
  console.log(error);

  return (
    <div className="register-container">
      <div className="Box"></div>
      <div className="register-form">
        <h2 className="register-title">Создать аккаунт</h2>
        <input
          className="register-inp"
          placeholder="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register-inp"
          placeholder="username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error.username ? (
          <h5 className="register-error">{error.username[0]}</h5>
        ) : (
          ""
        )}
        <input
          className="register-inp"
          placeholder="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password ? (
          <h5 className="register-error">{error.password[0]}</h5>
        ) : (
          ""
        )}
        <button className="register-btn" onClick={handleSubmit}>
          Зарегистрировать
        </button>
        <button className="register-btn" onClick={() => navigate("/login")}>
          Уже есть аккаунт, войти.
        </button>
      </div>
    </div>
  );
}
