// This is the products database were all products should be stored
let products = [
    {
        id: 1,
        name: "Viper",
        image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwee7958ca/images/images/1458669.png',
        price: 650,
        code:'',
        details: `
        <p>Price :650$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        `
    },
    {
        id: 2, name: "Downtown",
        image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw100742b3/images/images/1458671.png',
        price: 390,
        details: `
        <p>Price :390$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Angular</p>
        <p>Lens Size (mm): 59</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        `
    },
    {
        id: 3, name: "Bulgari men aviator",
        image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwde4b6c0d/images/images/1405661.png',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 4, name: "Bulgari men aviator",
        image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwe42e1044/images/images/1435534.png',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 5, name: "Serpenti squared",
        image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw22d7b56f/images/images/1405667.png',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 6, name: "Colorhapsody",
        image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw94391528/images/images/1405665.png',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 7, name: "Bulgari men aviator",
        image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw7bf017cd/images/images/1405668.png',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 8, name: "Bulgari men aviator",
        image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw776a9e95/images/images/1478414.png',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 9, name: "Ceder",
        image: '../assets/lenses/ceder.jpg',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 10, name: "Mysterious",
        image: '../assets/lenses/1.jpg',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 11, name: "Almond brown",
        image: '../assets/lenses/2.jpg',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
    {
        id: 12, 
        name: "Almond gray",
        image: '../assets/lenses/3.jpg',
        price: 303,
        details: `
        <p>Price :505$</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        <div class="navPages">
            <p>Want to see Another Product ?</p>
            <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
            <p><a href="/brands.html">Click Here To shope By Brands</a></p>
        </div>
        `
    },
];
