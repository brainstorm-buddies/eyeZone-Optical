
'use strict';

$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});


// javascript functions to handle products' displaying in product.html page
let urlParams = new URLSearchParams(window.location.search);
let productId = parseInt(urlParams.get("id"));

// Find the product with the matching ID
let product = products.find(function (p) {
    return p.id === productId;
});


if (product) {
    // product name
    let productNameDiv = document.getElementById("productName");
    let productHTML = `
      <span id="product-name" class='productName'>${product.name}</span>
    `;
    productNameDiv.innerHTML = productHTML;

    // product details
    let productDetailsDiv = document.getElementById("productInfo");
    let detailsHTML = product.details;
    productDetailsDiv.innerHTML = detailsHTML;

    let productPrice = document.getElementById("productPrice");
    let productPriceHTML = `
    <span id="product-price">${product.price}</span>
    `
    productPrice.innerHTML = productPriceHTML;

    // product image and add-to-cart form
    let productImageFormDiv = document.getElementById("productImage");
    let imageHTML = `
    <img id='product-image' src="${product.image}"
    alt="${product.name}">
    
    `
    productImageFormDiv.innerHTML = imageHTML;

   
} else {
    // Handle case when product is not found
    let productNameDiv = document.getElementById("productInfo");
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

