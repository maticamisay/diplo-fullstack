const Alumno = ({ nombre, edad = 19 }) => {
  // El tercer parámetro puede contener muchos componentes hijos dentro de un array [] o a través de un spread ...
  return React.createElement("div", { className: "card-alumno" }, [
    React.createElement("h2", {}, `Nombre: ${nombre} `),
    React.createElement("h3", {}, `Edad: ${edad} `),
    React.createElement("h3", {}, `Intereses: `),
  ]);
};

export default Alumno;
