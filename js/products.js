
'use strict';

// $(document).ready(function() {

//   $('.color-choose input').on('click', function() {
//       let headphonesColor = $(this).attr('data-image');
//       $('.active').removeClass('active');
//       $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
//       $(this).addClass('active');
//   });

// });


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
      <h1 id="product-name" class='productName'>${product.name}</h1>
    `;
    productNameDiv.innerHTML = productHTML;

    // product details
    let productDetailsDiv = document.getElementById("productInfo");
    let detailsHTML = product.details;
    productDetailsDiv.innerHTML = detailsHTML;

    let productPrice = document.getElementById("productPrice");
    let productPriceHTML = `
    <span>$</span><span id="product-price">${product.price}</span>
    <a id="add-to-cart" class="cart-btn">Add to cart</a>
    `
    productPrice.innerHTML = productPriceHTML;

    let productQuantity = document.getElementById('quantity');
    let productQuantityHTML = `
    <span>Quantity:</span>
    <input class="qLabel" value="1" type="number" id="product-quantity" min="1" max="100"
    placeholder="Quantity">
    `
    productQuantity.innerHTML = productQuantityHTML;

    // product image and add-to-cart form
    let productImageFormDiv = document.getElementById("productImage");
    let imageHTML = `
    <img id='product-image' src="${product.image}" alt="${product.name}">
    `
    productImageFormDiv.innerHTML = imageHTML;

    let productSimilar = document.getElementById("similar-products");
    let productSimilarHTML = `
    <center><h1 class="similar">Similar Products</h1></center>
    <div class="slider">
      <div class="slider-content" id="slider-content"></div>
    </div>
    `
    productSimilar.innerHTML = productSimilarHTML;

   
} else {
    // Handle case when product is not found
    let productNameDiv = document.getElementById("productInfo");
    let productHTML = `
      <h1 class='productName'>Product not found</h1>
    `;
    productNameDiv.innerHTML = productHTML;

    let productImageFormDiv = document.getElementById("productImage");
    let imageHTML = `
    <img id='product-image' src="https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg">
    `
    productImageFormDiv.innerHTML = imageHTML;
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

function displayRandomProducts() {
    let sliderContent = document.getElementById("slider-content");
    sliderContent.innerHTML = "";

    let startIndex = Math.floor(Math.random() * (products.length - 2));
    for (let i = startIndex; i < startIndex + 3; i++) {
      let product = products[i];

      let item = document.createElement("div");
      item.classList.add("slider-item");

      let card = document.createElement("div");
      card.classList.add("product-card");

      let image = document.createElement("img");
      image.classList.add("product-image");
      image.src = product.image;

      let name = document.createElement("h3");
      name.textContent = product.name;

      let price = document.createElement("p");
      price.textContent = "$" + product.price;

      let link = document.createElement("a");
      link.href = "product.html?id=" + product.id; // Navigate to product.html with the corresponding product id
      link.appendChild(card);
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);
      item.appendChild(link);
      sliderContent.appendChild(item);
    }
  }

  // Function to handle next slide
  function nextSlide() {
    let sliderContent = document.getElementById("slider-content");
    sliderContent.style.transform = "translateX(25%)";
    setTimeout(function () {
      displayRandomProducts();
      sliderContent.style.transform = "translateX(0%)";
    }, 500);
  }

  // Function to handle previous slide
  function prevSlide() {
    let sliderContent = document.getElementById("slider-content");
    sliderContent.style.transform = "translateX(-25%)";
    setTimeout(function () {
      displayRandomProducts();
      sliderContent.style.transform = "translateX(0%)";
    }, 500);
  }

  // Event listeners for arrow navigation
//   let nextArrow = document.getElementById("next");
//   nextArrow.addEventListener("click", nextSlide);

//   let preletrow = document.getElementById("prev");
//   preletrow.addEventListener("click", prevSlide);

  // Display random products in the slider on page load
  displayRandomProducts();
