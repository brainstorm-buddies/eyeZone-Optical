'use strict';
// Product(image, id, name, quantity, price, subtotal)

const bellaDaily = [];
const bellaMonthly = [];

const gucciMen = [];
const gucciWomen = [];
const bulgariMen = [];
const bulgariWomen = [];

// GUCCI

// MEN
let eyeGlassMenGucci1 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let eyeGlassMenGucci2 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let eyeGlassMenGucci3 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);

let sunGlassMenGucci1 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let sunGlassMenGucci2 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let sunGlassMenGucci3 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);

gucciMen.push(
    eyeGlassMenGucci1,
    eyeGlassMenGucci2,
    eyeGlassMenGucci3,
    sunGlassMenGucci1,
    sunGlassMenGucci2,
    sunGlassMenGucci3,
)

// WOMEN
let eyeGlassWomenGucci1 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let eyeGlassWomenGucci2 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let eyeGlassWomenGucci3 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);

let sunGlassWomenGucci1 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let sunGlassWomenGucci2 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let sunGlassWomenGucci3 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);

gucciWomen.push(
    eyeGlassWomenGucci1,
    eyeGlassWomenGucci2,
    eyeGlassWomenGucci3,
    sunGlassWomenGucci1,
    sunGlassWomenGucci2,
    sunGlassWomenGucci3,
)

// BULGARU

// MEN

let eyeGlassMenBulgari1 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let eyeGlassMenBulgari2 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let eyeGlassMenBulgari3 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);

let sunGlassMenBulgari1 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let sunGlassMenBulgari2 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let sunGlassMenBulgari3 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);

bulgariMen.push(
    eyeGlassMenBulgari1,
    eyeGlassMenBulgari2,
    eyeGlassMenBulgari3,
    sunGlassMenBulgari1,
    sunGlassMenBulgari2,
    sunGlassMenBulgari3,
)

// WOMEN

let eyeGlassWomenBulgari1 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let eyeGlassWomenBulgari2 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let eyeGlassWomenBulgari3 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);

let sunGlassWomenBulgari1 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let sunGlassWomenBulgari2 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);
let sunGlassWomenBulgari3 = new Product(
    '/assets/main/logo2.jpg',
    'id1',
    'Eye glass 1 for men',
    1,
    300
);

bulgariWomen.push(
    eyeGlassWomenBulgari1,
    eyeGlassWomenBulgari2,
    eyeGlassWomenBulgari3,
    sunGlassWomenBulgari1,
    sunGlassWomenBulgari2,
    sunGlassWomenBulgari3,
)

function loadProduct() {
    var urlParams = new URLSearchParams(window.location.search);
    var productId = parseInt(urlParams.get("id"));

    // Find the product with the matching ID
    var product = products.find(function (p) {
      return p.id === productId;
    });
}