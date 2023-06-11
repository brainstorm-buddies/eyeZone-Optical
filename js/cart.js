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
    let nameInput = document.getElementById("productName");
    let quantityInput = document.getElementById("qNumber");
    let priceInput = document.getElementById("product-price");

    let image = imageInput.src;
    let name = nameInput.value;
    let quantity = parseInt(quantityInput.value);
    let price = parseInt(priceInput.value);

    let id = Date.now();

    let product = new Product(image, id, name, quantity, price);

    let products = getProductsFromLocalStorage();
    products.push(product);
    saveProductsToLocalStorage(products);
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

// Event listener for the add product form submission
let addProductForm = document.getElementById("add-product-form");
addProductForm.addEventListener("submit", addProduct);

// Display the product list on page load
displayNumberOfProducts();