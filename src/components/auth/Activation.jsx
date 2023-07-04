import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activation } from "../../auth/authAction";
import "./Activation.css";

const Activation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  let formData = new FormData();

  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }

  useEffect(() => {
    dispatch(activation(formData));
  }, []);

  return (
    <div className="activation-container">
      <div className="Box"></div>
      <div className="activation-form">
        <h2 className="activation-title">Добро пожаловать!!!</h2>
        <h4 className="activation-text">Вы активированы</h4>
        <h4 className="activation-text">нажмите на кнопку Войти</h4>
        <button className="activation-btn" onClick={() => navigate("/login")}>
          Войти
        </button>
      </div>
    </div>
  );
};

export default Activation;
