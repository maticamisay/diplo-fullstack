const container = document.querySelector("#productos");

export const renderHtmlProducts = (array, btnText, event) => {
  array.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
          <h3>${product.title}</h3>
          <p>$ ${product.price}</p>
        `;
    const button = document.createElement("button");
    button.textContent = btnText;
    button.setAttribute("id", `productID-${product.id}`);
    button.addEventListener("click", event);
    div.appendChild(button);
    container.appendChild(div);
  });
};
