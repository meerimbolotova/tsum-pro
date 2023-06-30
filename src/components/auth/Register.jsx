import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../auth/authAction";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email.trim() || !username.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    dispatch(register({ formData, navigate }));
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Войти</h2>
        <input
          placeholder="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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

        <button onClick={handleSubmit}>Регистрация</button>
        <button onClick={() => navigate("/login")}>Войти</button>
      </div>
    </div>
  );
}
