import React from "react";
import "./ResetePassword.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetpassword } from "../../auth/authAction";

const ResetePassword = () => {
  const [email, setEmail] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email.trim()) {
      alert("Заполните поля!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);

    dispatch(resetpassword({ formData, navigate }));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="Box"></div>
      <h2>Сброс пароля</h2>
      <input
        placeholder="введите email"
        id="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>отправить</button>
    </div>
  );
};

export default ResetePassword;
