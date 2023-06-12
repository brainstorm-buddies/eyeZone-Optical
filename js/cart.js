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
    let counter = document.createElement('a')
    counter.textContent = productList;
    header.appendChild(counter);

}

// function to display the cart items
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
        idCell.textContent = product.code;
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
            updateQuantity(product.code, parseInt(quantityInput.value));
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
        let removeButtonDiv = document.createElement('div');
        let removeButtonUl = document.createElement('ul');
        let removeButtonLi = document.createElement("li");
        removeButtonDiv.classList = 'main'
        let removeButton = document.createElement('a');
        removeButton.style = 'color: #fff; cursor: pointer;'
        removeButton.textContent = "Remove";
        removeButtonLi.addEventListener("click", function () {
            removeProduct(product.code);
        });
        removeButtonLi.appendChild(removeButton);
        removeButtonUl.appendChild(removeButtonLi);
        removeButtonDiv.appendChild(removeButtonUl);
        actionsCell.appendChild(removeButtonDiv);
        row.appendChild(actionsCell);

        productTableBody.appendChild(row);
    });
}

// function to update the quantity of a product
function updateQuantity(code, quantity) {
    let products = getProductsFromLocalStorage();
    let product = products.find(function (p) {
        return p.code === code;
    });

    if (product) {
        product.quantity = quantity;
        product.subtotal = product.price * product.quantity;
        saveProductsToLocalStorage(products);
        displayProductList();
        displayTotalPrice();
    }
}

// function to decrease cart items by 1 for remove button
function removeCartItem() {
    let header = document.getElementById('cart-items')
    let cartItems = header.querySelector('a');
    cartItems.textContent = cartItems.textContent - 1;
}

// function to remove a product
function removeProduct(code) {
    let products = getProductsFromLocalStorage();
    let index = products.findIndex(function (p) {
        return p.code === code;
    });

    if (index !== -1) {
        products.splice(index, 1);
        saveProductsToLocalStorage(products);
        displayProductList();
        removeCartItem();
    }
}

// reset the entire cart
function resetCartItems() {
    let header = document.getElementById('cart-items')
    let cartItems = header.querySelector('a');
    cartItems.textContent = 0;
}

// function to clear all items from table
function clearTable(event) {
    event.preventDefault();
    let products = getProductsFromLocalStorage();
    products = [];
    saveProductsToLocalStorage(products);
    displayProductList();
    displayTotalPrice();
    resetCartItems();
}

// Event listener for add to cart
let clearProducts = document.getElementById("clear");
clearProducts.addEventListener("click", clearTable);

// Display the product list on table
displayProductList();
displayNumberOfProducts();