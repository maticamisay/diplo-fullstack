import React from "react";
import "./styles/Title.css";

const Title = ({ text }) => {
  return (
    <h1
      style={{
        color: "red",
        fontSize: "50px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
