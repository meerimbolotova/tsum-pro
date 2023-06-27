import React from "react";
import "./Admin.css";

const Admin = () => {
  return (
    <div
      className="admin__container"
    >
      <div
        className="admin__box"
      >
        <h2 className="admin__title">ADD CINEMA</h2>
        <input placeholder="title" className="inps admin__inp"/>
        <input placeholder="price" className="inps admin__inp" />
        <input placeholder="image" className="inps admin__inp" />
        <input
          placeholder="description"
          className="inps admin__inp"
        />
        <input
          placeholder="duration"
          className="inps admin__inp"
        />
        <input
          placeholder="director"
          className="inps admin__inp"
        />
        <input placeholder="cast" className="inps admin__inp" />
        <button className="admin__btn"
        >
          ADD
        </button>
        </div>
    </div>
  );
};

export default Admin;
