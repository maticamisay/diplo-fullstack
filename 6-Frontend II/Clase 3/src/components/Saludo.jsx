const Saludo = ({ text, children }) => {
  return (
    <>
      <h1>{text}</h1>
      {children}
    </>
  );
};

export default Saludo;
