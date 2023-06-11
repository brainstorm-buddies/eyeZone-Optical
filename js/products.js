'use strict';


let urlParams = new URLSearchParams(window.location.search);
let productId = parseInt(urlParams.get("id"));

// Find the product with the matching ID
let product = products.find(function (p) {
    return p.id === productId;
});


if (product) {
    let productNameDiv = document.getElementById("productName");
    let productHTML = `
      <p id="product-name" class='productName'>${product.name}</p>
    `;
    productNameDiv.innerHTML = productHTML;

    let productDetailsDiv = document.getElementById("productInfo");
    let detailsHTML = product.details;
    productDetailsDiv.innerHTML = detailsHTML;

    let productImageFormDiv = document.getElementById("productImageForm");
    let imageHTML = `
    <img id='product-image' src="${product.image}"
    alt="${product.name}">
    <form class="quantity"><div>
    <h2>Price: $<span id="product-price">${product.price}</span></h2></div>
    <input class="qLabel" type="number" id="product-quantity" min="1" max="100"
    placeholder="Quantity">
    <button class="addToCart" id="add-to-cart">
        <p>Add To Cart</p>
    </button>
    </form>
    `
    productImageFormDiv.innerHTML = imageHTML;

   
} else {
    // Handle case when product is not found
    let productNameDiv = document.getElementById("productImageForm");
    let productHTML = `
      <h1 class='productName'>Product not found</h1>
    `;
    productNameDiv.innerHTML = productHTML;
}
/*
// Generate the HTML content for the product
if (product) {
    let productNameDiv = document.getElementById('productName');
    let productName = document.createElement('p');
    productName.classList('productName');
    productName.textContent = product.name;
    productNameDiv.appendChild(productName);
} else {
    // Handle case when product is not found

    let productNameDiv = document.getElementById('productName');
    let productName = document.createElement('p');
    productName.classList('productName');
    productName.textContent = 'Product not found';
    productNameDiv.appendChild(productName);
}*/

