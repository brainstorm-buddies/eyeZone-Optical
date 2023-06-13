// page navigator function 
function navigateToPage(pageName) {
    let currentURL = window.location.href;
    let baseUrl = currentURL.substring(0, currentURL.lastIndexOf("/"));
    let newURL = baseUrl + "/" + pageName;
    window.location.href = newURL;
  }

  function cartHrefHandler() {
    window.location.href = '/cart.html'
  }

  let cartHref = document.getElementById("cart-icon");
  cartHref.addEventListener("click", cartHrefHandler);