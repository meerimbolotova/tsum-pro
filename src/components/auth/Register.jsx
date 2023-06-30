import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../auth/authAction";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password_confirm, setPassword_Confirm] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      !email.trim() ||
      !username.trim() ||
      !password.trim() ||
      !password_confirm.trim()
    ) {
      alert("Заполните поля!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirm", password_confirm);

    dispatch(register({ formData, navigate }));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
      <input
        placeholder="confim password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password_confirm}
        onChange={(e) => setPassword_Confirm(e.target.value)}
      />
      <button onClick={handleSubmit}>регистрация</button>
      <button onClick={() => navigate("/login")}>войти</button>
    </div>
  );
}
