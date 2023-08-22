export async function fetchApi() {
  const respuesta = await fetch("https://fakestoreapi.com/products");
  const data = await respuesta.json();
  return data;
}
