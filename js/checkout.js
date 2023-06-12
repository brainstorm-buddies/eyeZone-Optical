'use strict';

// for checkout page
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
    let cartItems = document.getElementById('products')
    cartItems.innerHTML = "";

    let products = getProductsFromLocalStorage();

    products.forEach(function (product) {
        let items = document.createElement('p')
        let itemName = document.createElement('a')
        let itemPrice = document.createElement('span')

        itemPrice.classList = 'price';
        itemPrice.textContent = `$${product.price}`

        itemName.textContent = product.name;
        itemName.href = './cart.html'
        items.appendChild(itemName);
        items.appendChild(itemPrice);
        cartItems.appendChild(items)
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
function clearCart() {
    let products = getProductsFromLocalStorage();
    products = [];
    saveProductsToLocalStorage(products);
    displayProductList();
    displayTotalPrice();
    resetCartItems();
}

function checkoutBtn(event) {
    event.preventDefault();
    alert("Thank you for your purchase!!")
    clearCart();
}

// Event listener for checkout btn
let clearProducts = document.getElementById("checkout");
clearProducts.addEventListener("click", checkoutBtn);

// Display the product list on table
displayProductList();
displayNumberOfProducts();