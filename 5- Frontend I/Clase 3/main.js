const form = document.querySelector("#form");
const users = [];
let isEditing = false;
let editingIdUser = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (data.password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    form.password.classList.add("error-input");
    form.reset();
    return;
  }
  form.password.classList.remove("error-input");
  if (isEditing) {
    // buscar usuario en users
    const user = users.find((user) => user.id == editingIdUser);
    // actualizar usuario
    user.name = data.name;
    user.password = data.password;
    user.classUser = data.classUser;
    form.reset();
    // cambiar isEditing a false
    isEditing = false;
    // cambiar editingIdUser a null
    editingIdUser = null;
    renderUsers();
    return;
  }
  data.id = Date.now();
  users.push(data);
  console.log(users);
  form.reset();
  renderUsers();
});

function renderUsers() {
  const usersSection = document.querySelector("#usuarios");
  usersSection.innerHTML = "";
  users.forEach((user) => {
    const div = document.createElement("div");
    div.setAttribute("id", "usuarios-list");
    const li = document.createElement("li");
    const button = document.createElement("button");

    li.textContent = `Usuario:${user.name}. 
    Clase: ${user.classUser}`;
    button.textContent = "Editar";
    button.setAttribute("id", `userid-${user.id}`);
    button.addEventListener("click", (e) => editUser(e));
    div.appendChild(li);
    div.appendChild(button);
    usersSection.appendChild(div);
  });
}

function editUser(event) {
  const idAttribute = event.target.id.split("-");
  const id = idAttribute[1];
  const user = users.find((user) => user.id == id);
  form.name.value = user.name;
  form.password.value = user.password;
  form.classUser.value = user.classUser;
  isEditing = true;
  editingIdUser = id;
}
