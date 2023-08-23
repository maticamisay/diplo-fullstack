export function saveLocalStorage(clave, data) {
  localStorage.setItem(clave, JSON.stringify(data));
}

export function getLocalStorage(clave) {
  const data = localStorage.getItem(clave);
  return JSON.parse(data);
}
