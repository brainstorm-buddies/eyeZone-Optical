
// for checkout page
function getProductsFromLocalStorage() {
    let products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
}

// Function to calculate the total price
function calculateTotalPrice() {
    let products = getProductsFromLocalStorage();
    let totalPrice = products.reduce(function (total, product) {
        return total + product.quantity * product.price;
    }, 0);

    return totalPrice.toFixed(2);
}

// Function to display the total price
function displayTotalPrice() {
    let totalPriceElement = document.getElementById("total-price");
    let totalPrice = calculateTotalPrice();
    totalPriceElement.textContent = "TOTAL: $" + totalPrice;
}

displayTotalPrice();