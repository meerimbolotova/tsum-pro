import React from "react";
import "./Admin.css";

const Admin = () => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
        className="box"
      >
        <h2 style={{ marginTop: "200px" }}>ADD CINEMA</h2>
        <input placeholder="title" style={{ width: "40%", height: "50px" }} />
        <input placeholder="price" style={{ width: "40%", height: "50px" }} />
        <input placeholder="image" style={{ width: "40%", height: "50px" }} />
        <input
          placeholder="description"
          style={{ width: "40%", height: "50px" }}
        />
        <input
          placeholder="duration"
          style={{ width: "40%", height: "50px" }}
        />
        <input
          placeholder="director"
          style={{ width: "40%", height: "50px" }}
        />
        <input placeholder="cast" style={{ width: "40%", height: "50px" }} />
        <button
          style={{
            width: "40%",
            height: "50px",
            backgroundColor: "red",
            border: "none",
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Admin;
