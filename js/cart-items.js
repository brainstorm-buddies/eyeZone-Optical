'use strict';

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
    let counter = document.createElement('span')
    counter.textContent = productList;
    header.appendChild(counter);

}
displayNumberOfProducts();