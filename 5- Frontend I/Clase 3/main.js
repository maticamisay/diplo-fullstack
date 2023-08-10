const form = document.querySelector("#form");
const users = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  users.push(data);
  form.reset();
  renderUsers();
});

function renderUsers() {
  const usersSection = document.querySelector("#usuarios");
  usersSection.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `Username: ${user.name}, password: ${user.password}`;
    usersSection.appendChild(li);
  });
}
