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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="Box"></div>
      <h3>Добро пожаловать!!!</h3>
      <h4>Вы активированы</h4>
      <h4>нажмите на кнопку Войти</h4>

      <button onClick={() => navigate("/login")}>Войти</button>
    </div>
  );
};

export default Activation;
