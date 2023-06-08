'use strict';

// Constructor function
function Product(image, id, name, quantity, price, subtotal) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.subtotal = subtotal;
}

// Function to add a product
function addProduct(event) {
    event.preventDefault();

    let imageInput = document.getElementById("product-image");
    let nameInput = document.getElementById("product-name");
    let quantityInput = document.getElementById("product-quantity");
    let priceInput = document.getElementById("product-price");

    let image = imageInput.value;
    let name = nameInput.value;
    let quantity = parseInt(quantityInput.value);
    let price = parseInt(priceInput.value);

    let id = Date.now();

    let product = new Product(image, id, name, quantity, price);

    let products = getProductsFromLocalStorage();
    products.push(product);
    saveProductsToLocalStorage(products);

    imageInput.value = "";
    nameInput.value = "";
    quantityInput.value = "";
    priceInput.value = "";

    displayProductList();
}

// Function to retrieve products from localStorage
function getProductsFromLocalStorage() {
    let products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
}

// Function to save products to localStorage
function saveProductsToLocalStorage(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

// function to display cart items counter
function displayNumberOfProducts() {
    let products = getProductsFromLocalStorage();
    let productList = products.length;
    let header = document.getElementById('cart-items')
    let counter = document.createElement('a')
    counter.textContent = productList;
    header.appendChild(counter);

}

// Function to display the product list
function displayProductList() {
    let productTableBody = document.querySelector("#product-table tbody");
    productTableBody.innerHTML = "";

    let products = getProductsFromLocalStorage();

    products.forEach(function (product) {
        let row = document.createElement("tr");

        let imageCell = document.createElement("td");
        let imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;
        imageElement.style.maxHeight = "100px";
        imageCell.appendChild(imageElement);
        row.appendChild(imageCell);

        let idCell = document.createElement("td");
        idCell.textContent = product.id;
        row.appendChild(idCell);

        let nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        let quantityCell = document.createElement("td");
        let quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = "1";
        quantityInput.max = "100";
        quantityInput.value = product.quantity;
        quantityInput.addEventListener("input", function () {
            updateQuantity(product.id, parseInt(quantityInput.value));
        });
        quantityCell.appendChild(quantityInput);
        row.appendChild(quantityCell);

        let priceCell = document.createElement("td");
        priceCell.textContent = product.price;
        row.appendChild(priceCell);

        let subtotalCell = document.createElement("td");
        subtotalCell.textContent = product.price * product.quantity;
        row.appendChild(subtotalCell);

        let actionsCell = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            removeProduct(product.id);
        });
        actionsCell.appendChild(removeButton);
        row.appendChild(actionsCell);

        productTableBody.appendChild(row);
    });
}

// Function to update the quantity of a product
function updateQuantity(id, quantity) {
    let products = getProductsFromLocalStorage();
    let product = products.find(function (p) {
        return p.id === id;
    });

    if (product) {
        product.quantity = quantity;
        product.subtotal = product.price * product.quantity;
        saveProductsToLocalStorage(products);
        location.reload();
    }
}

// Function to remove a product
function removeProduct(id) {
    let products = getProductsFromLocalStorage();
    let index = products.findIndex(function (p) {
        return p.id === id;
    });

    if (index !== -1) {
        products.splice(index, 1);
        saveProductsToLocalStorage(products);
        displayProductList();
    }
}

// Event listener for the add product form submission
let addProductForm = document.getElementById("add-product-form");
addProductForm.addEventListener("submit", addProduct);

// Display the product list on page load
displayProductList();
displayNumberOfProducts();