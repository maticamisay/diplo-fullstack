const Button = ({ textButton, bg = "red", functionButton }) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        color: "white",
        padding: "10px",
      }}
      onClick={functionButton}
    >
      {textButton}
    </button>
  );
};

export default Button;
