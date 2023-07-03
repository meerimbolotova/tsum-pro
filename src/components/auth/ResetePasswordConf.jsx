import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetpasswordconf } from "../../auth/authAction";

const ResetePasswordConf = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [newpassword, setNewPassword] = useState("");

  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  //   console.log(uid);
  //   console.log(token);

  const handleSubmit = () => {
    if (!newpassword.trim()) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("uid", uid);
    formData.append("token", token);
    formData.append("new_password", newpassword);

    dispatch(resetpasswordconf({ formData, navigate }));

    // for (let [key, value] of formData) {
    //   console.log(key, value);
    // }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="Box"></div>
      <h3>Введите новый пароль и Сохранить</h3>
      <input
        placeholder="new_password"
        type="password"
        id="new_password"
        value={newpassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Сохранить</button>
    </div>
  );
};

export default ResetePasswordConf;
