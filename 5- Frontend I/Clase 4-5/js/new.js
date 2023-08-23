import { getLocalStorage, saveLocalStorage } from "./utils/localStorage.js";

const form = document.querySelector(".my-form");

const evento = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  // crear id con Date.now() que es un timestamp
  data.id = Date.now();
  const errors = checkErrors(data);
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }
  const db = getLocalStorage("db") || [];
  db.push(data);
  saveLocalStorage("db", db);
  form.reset();
};

const checkErrors = (data) => {
  let errors = [];
  if (data.title.length < 10) {
    errors.push("El nombre debe tener al menos 10 caracteres");
  }
  if (data.price <= 0) {
    errors.push("El precio debe ser mayor a 0");
  }
  return errors;
};

form.addEventListener("submit", evento);
