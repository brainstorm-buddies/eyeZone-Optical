// This is the products database were all products should be stored
let products = [
  {
    id: 1,
    name: "Viper",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwee7958ca/images/images/1458669.png",
    price: 650,
    code: "",
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV6186K_2023_87</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Angular</p>
        <p>Lens Size (mm): 59</p>
        <p>Frame Dimension (mm): 136</p>
        `,
  },
  {
    id: 2,
    name: "Downtown",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw100742b3/images/images/1458671.png",
    price: 390,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV8259_501_T3</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 55</p>
        <p>Frame Dimension (mm): 127</p>
        `,
  },
  {
    id: 3,
    name: "Bulgari men aviator",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwde4b6c0d/images/images/1405661.png",
    price: 310,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV4212_5518</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Cat-Eye</p>
        <p>Lens Size (mm): 53</p>
        <p>Frame Dimension (mm): 125</p>
        `,
  },
  {
    id: 4,
    name: "Bulgari men aviator",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwe42e1044/images/images/1435534.png",
    price: 330,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV4214B_5518</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Cat-Eye</p>
        <p>Lens Size (mm): 54</p>
        <p>Frame Dimension (mm): 127</p>
        `,
  },
  {
    id: 5,
    name: "Serpenti squared",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw22d7b56f/images/images/1405667.png",
    price: 570,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV5053_128_G6</span>
        </p>
        <p>Color: Black, Grey</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 56</p>
        <p>Frame Dimension (mm): 135</p>
        `,
  },
  {
    id: 6,
    name: "Colorhapsody",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwe42e1044/images/images/1435534.png",
    price: 510,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV5060_2022_53</span>
        </p>
        <p>Color: Brown</p>
        <p>Lens Shape: Aviator</p>
        <p>Lens Size (mm): 57</p>
        <p>Frame Dimension (mm): 132</p>
        `,
  },
  {
    id: 7,
    name: "Bulgari men aviator",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw7bf017cd/images/images/1405668.png",
    price: 450,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV3052_5518</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Round</p>
        <p>Lens Size (mm): 50</p>
        <p>Frame Dimension (mm): 124</p>
        `,
  },
  {
    id: 8,
    name: "Bulgari men aviator",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw776a9e95/images/images/1478414.png",
    price: 360,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV3049_5457</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 55</p>
        <p>Frame Dimension (mm): 129</p>
        `,
  },

  {
    id: 9,
    name: "GUCCI 9",
    image:
      "https://i.pinimg.com/originals/66/c1/01/66c101f1fa1f5cac9e5836ac29b0aa0c.jpg",
    price: 505,
    code: "",
    details: `
        <p>Brand: GUCCI</p>
        <p>
          Product code: <span id="product-code">663746 J0740 1012</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Angular</p>
        <p>Lens Size (mm): 145</p>
        <p>Frame Dimension (mm): height: 2.4,width: 5.8</p>
        `,
  },
  {
    id: 10,
    name: "GUCCI 10",
    image:
      "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1665481556/733368_J1691_2360_001_100_0000_Light-Oversized-rectangular-sunglasses.jpg",
    price: 710,
    details: `
        <p>Brand: GUCCI</p>
        <p>
          Product code: <span id="product-code">733368 J1691 2360</span>
        </p>
        <p>Color: Shiny dark brown</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 51</p>
        <p>Frame Dimension (mm): height: 2, width: 5.8</p>
        `,
  },
  {
    id: 11,
    name: "GUCCI 11",
    image:
      "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1673653572/733583_J0740_2391_001_100_0000_Light-Specialized-fit-cat-eye-optical-frame.jpg",
    price: 550,
    details: `
        <p>Brand: GUCCI</p>
        <p>
          Product code: <span id="product-code">733583 J0740 2391</span>
        </p>
        <p>Color: Shiny tortoiseshell</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 55</p>
        <p>Frame Dimension (mm): height: 1.6</p>
        `,
  },
  {
    id: 12,
    name: "GUCCI 12",
    image:
      "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1676331012/733583_J0740_1091_001_100_0000_Light-Specialized-fit-cat-eye-optical-frame.jpg",
    price: 330,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV4214B_5518</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Cat-Eye</p>
        <p>Lens Size (mm): 54</p>
        <p>Frame Dimension (mm): 127</p>
        `,
  },
  {
    id: 13,
    name: "Serpenti squared",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw22d7b56f/images/images/1405667.png",
    price: 570,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV5053_128_G6</span>
        </p>
        <p>Color: Black, Grey</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 56</p>
        <p>Frame Dimension (mm): 135</p>
        `,
  },
  {
    id: 14,
    name: "Colorhapsody",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dwe42e1044/images/images/1435534.png",
    price: 510,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV5060_2022_53</span>
        </p>
        <p>Color: Brown</p>
        <p>Lens Shape: Aviator</p>
        <p>Lens Size (mm): 57</p>
        <p>Frame Dimension (mm): 132</p>
        `,
  },
  {
    id: 15,
    name: "Bulgari men aviator",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw7bf017cd/images/images/1405668.png",
    price: 450,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV3052_5518</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Round</p>
        <p>Lens Size (mm): 50</p>
        <p>Frame Dimension (mm): 124</p>
        `,
  },
  {
    id: 16,
    name: "Bulgari men aviator",
    image:
      "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw776a9e95/images/images/1478414.png",
    price: 360,
    details: `
        <p>Brand: Bvlgari</p>
        <p>
          Product code: <span id="product-code">BV3049_5457</span>
        </p>
        <p>Color: Black</p>
        <p>Lens Shape: Rectangular</p>
        <p>Lens Size (mm): 55</p>
        <p>Frame Dimension (mm): 129</p>
        `,
  },

  {
    id: 17,
    name: "Ceder",
    image: "../assets/lenses/ceder.jpg",
    price: 10,
    details: `
        <p>Brand: Bella</p>
        <p>
          Product code: <span id="product-code">bella_ceder</span>
        </p>
        <p>Lens type: Daily use</p>
        `,
  },
  {
    id: 18,
    name: "Mysterious",
    image: "../assets/lenses/1.jpg",
    price: 303,
    details: `
        <p>Brand: Bella</p>
        <p>
          Product code: <span id="product-code">bella_almond_brown</span>
        </p>
        <p>Lens type: Daily use</p>
        `,
  },
  {
    id: 19,
    name: "Almond brown",
    image: "../assets/lenses/2.jpg",
    price: 30,
    details: `
        <p>Brand: Bella</p>
        <p>
          Product code: <span id="product-code">bella_mysterious</span>
        </p>
        <p>Lens type: Monthly use</p>
        `,
  },
  {
    id: 20,
    name: "Almond gray",
    image: "../assets/lenses/3.jpg",
    price: 30,
    details: `
        <p>Brand: Bella</p>
        <p>
          Product code: <span id="product-code">bella_almond_gray</span>
        </p>
        <p>Lens type: Monthly use</p>
        `,
  },
];
