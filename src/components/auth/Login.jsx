import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../auth/authAction";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    dispatch(login({ formData, navigate, username }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="Box"></div>
      <h2>Добро пожаловать!!!</h2>
      <input
        placeholder="username"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Войти</button>
      <button onClick={() => navigate("/register")}>Регистрация</button>
      <button onClick={() => navigate("/resetpassword")}>
        не помню пароль
      </button>
    </div>
  );
}
