'use-strict';

function addProduct(event) {
    event.preventDefault();

    let imageInput = document.getElementById("product-image");
    let nameInput = document.getElementById("product-name");
    let quantityInput = document.getElementById("product-quantity");
    let priceInput = document.getElementById("product-price");
    let codeInput = document.getElementById('product-code');

    let image = imageInput.src;
    let name = nameInput.textContent;
    let quantity = parseInt(quantityInput.value);
    let price = priceInput.textContent;
    let code = codeInput.textContent;

    let allProducts = getProductsFromLocalStorage();
    let product = allProducts.find(function (p) {
        return p.code === code;
    });

    if (product) {
        return alert("This product is already in your cart!")
    } else {
        let addToCart = new Product(image, code, name, quantity, price);


        allProducts.push(addToCart);
        saveProductsToLocalStorage(allProducts);
        alert("The item has been added to your cart!")
        window.location.reload();
    }


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

// function to display cart products counter
function displayNumberOfProducts() {
    let products = getProductsFromLocalStorage();
    let productList = products.length;
    let header = document.getElementById('cart-items')
    let counter = document.createElement('a')
    counter.textContent = productList;
    header.appendChild(counter);

}


// Event listener for the add product form submission
let addProductForm = document.getElementById("add-to-cart");
addProductForm.addEventListener("click", addProduct);

// Display the product list on page load
displayNumberOfProducts();