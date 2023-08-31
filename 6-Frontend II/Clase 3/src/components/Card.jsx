import React from "react";

const Card = ({ orientation, children }) => {
  const cardStyles = {
    backgroundColor: orientation === "horizontal" ? "lightblue" : "lightgreen",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    flexGrow: 1, // Permite que el componente crezca según el espacio disponible
    flexShrink: 1, // Permite que el componente se encoja si el espacio es limitado
    flexBasis: "auto", // Tamaño base del componente
    padding: "1rem",
    margin: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 1rem rgba(0,0,0,0.5)",
    gap: "1rem",
  };

  return <div style={cardStyles}>{children}</div>;
};

export default Card;
