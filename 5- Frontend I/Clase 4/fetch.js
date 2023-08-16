function saveLocalStorage(clave, data) {
  localStorage.setItem(clave, JSON.stringify(data));
}

function getLocalStorage(clave) {
  const data = localStorage.getItem(clave);
  return JSON.parse(data);
}

async function fetchApi() {
  const respuesta = await fetch("https://fakestoreapi.com/products");
  const data = await respuesta.json();
  return data;
}

async function saveData() {
  try {
    const data = await fetchApi();
    console.log(data);
    // saveLocalStorage("data", data);
  } catch (error) {
    console.log("Ha ocurrido un error: ", error.message);
  }
}

async function getData() {
  try {
    const prodDb = getLocalStorage("data");
    console.log(prodDb);
    return prodDb;
  } catch (error) {
    console.log("Ha ocurrido un error: ", error.message);
  }
}

saveData();
getData();
