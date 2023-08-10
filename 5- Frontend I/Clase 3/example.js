const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = form.name.value;
  let password = form.password.value;
  let usuario = {
    nombre,
    password,
  };
  console.log(usuario);
  form.name.value = "";
  form.password.value = "";
});
