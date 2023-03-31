import showProductPage from "./productPage.js";

function addEventListeners() {
    let productPageLink = document.getElementById("products");
    let startPageLink = document.getElementById("start");
    let root = document.getElementById("root");
    productPageLink.addEventListener("click", showProductPage)
    startPageLink.addEventListener("click", () => {
        root.innerHTML = "";
        let welcome = document.createElement("h2");
        welcome.innerText = "Välkommen till Classic Models!";
        root.appendChild(welcome);
    })
};

addEventListeners();