import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetpasswordconf } from "../../auth/authAction";
import "./ResetePasswordConf.css";

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
    let formData = new FormData();
    formData.append("uid", uid);
    formData.append("token", token);
    formData.append("new_password", newpassword);

    dispatch(resetpasswordconf({ formData, navigate }));
  };

  const error = useSelector((state) => state.auth.error);
  console.log(error);

  return (
    <div className="reset-pass-container">
      <div className="Box"></div>
      <div className="reset-pass-form">
        <h2 className="reset-pass-title">Введите новый пароль и Сохранить</h2>
        <input
          className="reset-pass-inp"
          placeholder="new_password"
          type="password"
          id="new_password"
          value={newpassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {error.new_password ? (
          <h5 className="reset-pass-error">{error.new_password[0]}</h5>
        ) : (
          ""
        )}
        <button className="reset-pass-btn" onClick={handleSubmit}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
export default ResetePasswordConf;
