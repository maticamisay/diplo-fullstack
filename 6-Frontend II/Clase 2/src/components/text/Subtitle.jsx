import React from "react";

const Subtitle = ({ text }) => {
  return (
    <h2
      style={{
        color: "blue",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {text}
    </h2>
  );
};

export default Subtitle;
