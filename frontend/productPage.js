export default function productPage() {
    let root = document.getElementById("root");
    root.innerHTML = "";

    fetch("http://localhost:3000/productlines/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        data.map(category => {    
            let div = document.createElement("div");      
            let categoryName = document.createElement("h2");
            categoryName.innerText = category.productLine;
            div.appendChild(categoryName);

            let categoryDescription = document.createElement("p");
            categoryDescription.innerText = category.textDescription;
            div.appendChild(categoryDescription);

            div.addEventListener("click", ()=> {
                showProductsInProductLine(category.productLine)
            })
            root.appendChild(div);
        });
    });

    function showProductsInProductLine(productLine) {
        root.innerHTML = "";

        let title = document.createElement("h2");
        title.innerText = productLine
        root.appendChild(title);

        fetch("http://localhost:3000/products/" + productLine)
        .then(res => res.json())
        .then(data => {
        console.log(data)

        let ul = document.createElement("ul")
        data.map(product => {
            let li = document.createElement("li");
            li.innerText = product.productName + ", " + product.MSRP;
            ul.appendChild(li)
        })
        root.appendChild(ul)

        });
    }
};