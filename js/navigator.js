function navigateToPage(pageName) {
    let currentURL = window.location.href;
    let baseUrl = currentURL.substring(0, currentURL.lastIndexOf("/"));
    let newURL = baseUrl + "/" + pageName;
    window.location.href = newURL;
  }