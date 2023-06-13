// This is the products database were all products should be stored
let products = [
  {
      id: 1,
      name: "Viper",
      image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwee7958ca/images/images/1458669.png',
      price: 650,
      details: `
      <p>Price :650$</p>
      <p>
        Product code: <span id="product-code">BV6186K_2023_87</span>
      </p>
      <p>Color: Black</p>
      <p>Lens Shape: angular</p>
      <p>Lens Size (mm): 59</p>
      <p>Frame Dimension (mm): 136</p>
      `
  },
  {
      id: 2, name: "Downtown",
      image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw100742b3/images/images/1458671.png',
      price: 390,
      details: `
      <p>Price :390$</p>
      <p>
        Product code: <span id="product-code">BV8259_501_T3</span>
      </p>
      <p>Color: Black</p>
      <p>Lens Shape: RecAngular</p>
      <p>Lens Size (mm): 55</p>
      <p>Frame Dimension (mm): 127</p>
      `
  },
  {
      id: 3, name: "aviator",
      image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwde4b6c0d/images/images/1405661.png',
      price: 570,
      details: `
      <p>Price :570$</p>
      <p>
        Product code: <span id="product-code">BV5053_128_G6</span>
      </p>
      <p>Color: Black</p>
      <p>Lens Shape: Rectangular</p>
      <p>Lens Size (mm): 56</p>
      <p>Frame Dimension (mm):135</p>
      <div class="navPages">
          <p>Want to see Another Product ?</p>
          <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
          <p><a href="/brands.html">Click Here To shope By Brands</a></p>
      </div>
      `
  },
  {
      id: 4, name: "aviator",
      image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwe42e1044/images/images/1435534.png',
      price: 510,
      details: `
      <p>Price :510$</p>
      <p>
        Product code: <span id="product-code">BV5060_2022_53</span>
      </p>
      <p>Color: Brown</p>
      <p>Lens Shape: Rectangular</p>
      <p>Lens Size (mm): 57</p>
      <p>Frame Dimension (mm):132</p>
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
        Product code: <span id="product-code">BV4212_5518</span>
      </p>
      <p>Color: Black</p>
      <p>Lens Shape: Cat-Eye</p>
      <p>Lens Size (mm): 53</p>
      <p>Frame Dimension (mm):125</p>
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
        Product code: <span id="product-code">BV4214B_5518</span>
      </p>
      <p>Color: Black</p>
      <p>Lens Shape: Cat-Eye</p>
      <p>Lens Size (mm): 54</p>
      <p>Frame Dimension (mm): 127</p>
      <div class="navPages">
          <p>Want to see Another Product ?</p>
          <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
          <p><a href="/brands.html">Click Here To shope By Brands</a></p>
      </div>
      `
  },
  {
      id: 7, name: "Round aviator",
      image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw7bf017cd/images/images/1405668.png',
      price: 450,
      details: `
      <p>Price :450$</p>
      <p>
        Product code: <span id="product-code">BV3052_5518</span>
      </p>
      <p>Color: Black</p>
      <p>Lens Shape: Round</p>
      <p>Lens Size (mm): 50</p>
      <p>Frame Dimension (mm):124</p>
      <div class="navPages">
          <p>Want to see Another Product ?</p>
          <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
          <p><a href="/brands.html">Click Here To shope By Brands</a></p>
      </div>
      `
  },
  {
      id: 8, name: "Round aviator",
      image: 'https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw776a9e95/images/images/1478414.png',
      price: 360,
      details: `
      <p>Price :360$</p>
      <p>
        Product code: <span id="product-code">BV3049_5457</span>
      </p>
      <p>Color: Black</p>
      <p>Lens Shape: Rectangular</p>
      <p>Lens Size (mm): 55</p>
      <p>Frame Dimension (mm): 129</p>
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
      price: 10,
      details: `
      <p>Price :10$</p>
      <p>
        Product code: <span id="product-code">663746 J0740 1010</span>
      </p>
      <p>Color: Blue</p>
      <p>Lens Shape: Round</p>
      <p>Lens Size (mm): 30</p>
      <p>Frame Dimension (mm): 1</p>
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
      price: 30,
      details: `
      <p>Price :30$</p>
      <p>
        Product code: <span id="product-code">663746 J0740 1011</span>
      </p>
      <p>Color: Baby blue</p>
      <p>Lens Shape: round</p>
      <p>Lens Size (mm): 30</p>
      <p>Frame Dimension (mm): 1</p>
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
      price: 10,
      details: `
      <p>Price :10$</p>
      <p>
        Product code: <span id="product-code">663746 J0740 1012</span>
      </p>
      <p>Color: Brown</p>
      <p>Lens Shape: Round</p>
      <p>Lens Size (mm): 30</p>
      <p>Frame Dimension (mm): 1</p>
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
      price: 30,
      details: `
      <p>Price :30$</p>
      <p>
        Product code: <span id="product-code">663746 J0740 1013</span>
      </p>
      <p>Color: Gray</p>
      <p>Lens Shape: Round</p>
      <p>Lens Size (mm): 30</p>
      <p>Frame Dimension (mm): 1</p>
      <div class="navPages">
          <p>Want to see Another Product ?</p>
          <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
          <p><a href="/brands.html">Click Here To shope By Brands</a></p>
      </div>
      `
  },

  {
    id: 13, 
    name: "hazel hony",
    image: '../assets/lenses/3.jpg',
    price: 10,
    details: `
    <p>Price :10$</p>
    <p>
      Product code: <span id="product-code">663746 J0740 1014</span>
    </p>
    <p>Color: Hony</p>
    <p>Lens Shape: Round</p>
    <p>Lens Size (mm): 30</p>
    <p>Frame Dimension (mm): 1</p>
    <div class="navPages">
        <p>Want to see Another Product ?</p>
        <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
        <p><a href="/brands.html">Click Here To shope By Brands</a></p>
    </div>
    `
},

{
  id: 14, 
  name: "BROWN SHADOW",
  image: '../assets/lenses/3.jpg',
  price: 30,
  details: `
  <p>Price :30$</p>
  <p>
    Product code: <span id="product-code">663746 J0740 1015</span>
  </p>
  <p>Color: Brown</p>
  <p>Lens Shape: Round</p>
  <p>Lens Size (mm): 30</p>
  <p>Frame Dimension (mm): 1</p>
  <div class="navPages">
      <p>Want to see Another Product ?</p>
      <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
      <p><a href="/brands.html">Click Here To shope By Brands</a></p>
  </div>
  `
},

{
id: 15, name: "Gucci aviator women",
image: 'https://media.gucci.com/style/White_Center_0_0_250x170/1616592604/663746_J0740_1012_001_100_0000_Light-Rectangular-frame-sunglasses.jpg',
price: 505,
details: `
<p>Price :505$</p>
<p>
  Product code: <span id="product-code">663746 J0740 1016</span>
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
id: 16, name: "Gucci aviator women",
image: 'https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1665481556/733368_J1691_2360_001_100_0000_Light-Oversized-rectangular-sunglasses.jpg ',
price: 550,
details: `
<p>Price : 550$</p>
<p>
  Product code: <span id="product-code">733368 J1691 2360</span>
</p>
<p>Color: Black</p>
<p>Lens Shape: Rectangular</p>
<p>Lens Size (mm): 5.1</p>
<p>Frame Dimension (mm): height: 2,width: 5.8</p>
<div class="navPages">
    <p>Want to see Another Product ?</p>
    <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
    <p><a href="/brands.html">Click Here To shope By Brands</a></p>
</div>
`
},

{
id: 17, name: "Gucci aviator shiny ",
image: 'https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1676331012/733583_J0740_1091_001_100_0000_Light-Specialized-fit-cat-eye-optical-frame.jpg  ',
price: 510,
details: `
<p>Price : 510$</p>
<p>
  Product code: <span id="product-code">733583 J0740 2391</span>
</p>
<p>Color: Shiny tortoiseshell</p>
<p>Lens Shape: Rectangular</p>
<p>Lens Size (mm): 5.5</p>
<p>Frame Dimension (mm): height: 1.6,width: 5.8</p>
<div class="navPages">
    <p>Want to see Another Product ?</p>
    <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
    <p><a href="/brands.html">Click Here To shope By Brands</a></p>
</div>
`
},

{
id: 18, name: "Gucci gold",
image: 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1530795620/520116_I0330_8070_001_100_0000_Light-Aviator-metal-sunglasses.jpg   ',
price: 535,
details: `
<p>Price : 535$</p>
<p>
  Product code: <span id="product-code">520116 I0330 8070</span>
</p>
<p>Color: Gold-toned metal</p>
<p>Lens Shape: Rectangular</p>
<p>Lens Size (mm): 5.7</p>
<p>Frame Dimension (mm): height: 2,width: 5.5</p>
<div class="navPages">
    <p>Want to see Another Product ?</p>
    <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
    <p><a href="/brands.html">Click Here To shope By Brands</a></p>
</div>
`
},

{
id: 19, name: "Gucci shiny",
image: 'https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1664578027/733380_J0740_2340_001_100_0000_Light-Aviator-frame-sunglasses.jpg    ',
price: 450,
details: `
<p>Price : 450$</p>
<p>
  Product code: <span id="product-code">733380 J0740 2340</span>
</p>
<p>Color: Shiny tortoiseshell</p>
<p>Lens Shape: Angular</p>
<p>Lens Size (mm): 5.7</p>
<p>Frame Dimension (mm): height: 2.3,width: 5.7</p>
<div class="navPages">
    <p>Want to see Another Product ?</p>
    <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
    <p><a href="/brands.html">Click Here To shope By Brands</a></p>
</div>
`
},

{
id: 20, name: "Gucci black",
image: 'https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1675900042/733568_J0740_1091_001_100_0000_Light-Rectangular-optical-frame.jpg   ',
price: 450,
details: `
<p>Price : 450$</p>
<p>
  Product code: <span id="product-code">733568 J0740 1090</span>
</p>
<p>Color: Shiny black</p>
<p>Lens Shape: Angular</p>
<p>Lens Size (mm): 5.7</p>
<p>Frame Dimension (mm): height: 2,width: 5.5</p>
<div class="navPages">
    <p>Want to see Another Product ?</p>
    <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
    <p><a href="/brands.html">Click Here To shope By Brands</a></p>
</div>
`
},

{
id: 21, name: "Gucci shiny dark",
image: 'https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1673653537/733573_J0740_2391_001_100_0000_Light-Rectangular-optical-frame.jpg    ',
price: 550,
details: `
<p>Price : 550$</p>
<p>
  Product code: <span id="product-code">733573 J0740 2392</span>
</p>
<p>Color: Shiny dark tortoiseshell</p>
<p>Lens Shape: Angular</p>
<p>Lens Size (mm): 5.7</p>
<p>Frame Dimension (mm): height: 2,width: 5.5</p>
<div class="navPages">
    <p>Want to see Another Product ?</p>
    <p> <a href="/categories.html"> Click Here To Shope By Catigory</a> </p>
    <p><a href="/brands.html">Click Here To shope By Brands</a></p>
</div>
`
},

];
