import React from "react";
import "./Button.css";

const Button = ({ size, color = "#000", children }) => {
  const styles = {
    padding: size === "big" ? "1rem" : "0.5rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: color,
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <button
      style={styles}
      //   className={`${size === "big" ? "bigButton" : "smallButton"}`}
    >
      {children}
    </button>
  );
};

export default Button;
