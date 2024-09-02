import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import OrderPlaced from "./pages/OrderPlaced";

function App() {
  const [CART, setCART] = useState([]);
  const [cart, setcart] = useState([]);
  const addToCart = (data) => {
    setcart([...cart, { ...data, quantity: 1 }]);
  
  };
  const [ShoeData, setShoeData] = useState([
    {
      id: 1,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3d34b19a-00d0-4dd2-83d1-0ec839d92a2e/NIKE+CORTEZ.png",
      name: "Nike Cortez",
      price: 7495,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 2,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c78d4d43-49d9-444c-9e56-84dd7b3e1b41/AIR+FORCE+1+%2707+LV8.png",
      name: "Nike Zoom Vomero 5",
      price: 14995,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 3,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8de611bf-8270-4789-a44a-96b0c933396d/NIKE+AIR+MAX+1+ESS+PRM.png",
      name: "Nike P-6000",
      price: 4500,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 4,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/12bb7e18-8cce-4b7e-b917-b9c0676a49eb/AIR+ZOOM+PEGASUS+41.png",
      name: "Nike Pegasus",
      price: 13995,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 5,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b24bc11-4ea0-4ee5-8d16-aa58b518475b/AIR+FORCE+1+%2707+FRESH.png",
      name: "Nike Panda Low Dunk",
      price: 8750,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 6,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+EASYON.png",
      name: "Nike Jordan Stadium 90",
      price: 6770,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 7,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cad08379-10fd-45a9-98db-5689453f8353/GIANNIS+FREAK+6+NRG+EP.png",
      name: "Nike Air Force 1 '07 QS",
      price: 5060,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 8,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a893816c-ec5d-46a0-8b25-317790717d41/JORDAN+LUKA+3+PF.png",
      name: "Nike Air Max 97",
      price: 11233,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 9,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/160469b0-9d14-452c-a153-c383259bd484/NIKE+SB+JANOSKI%2B+SLIP.png",
      name: "Nike Air Jordan 1 Mid",
      price: 9970,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 10,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00b15964-4630-4e93-8097-5d55ca96c589/NIKE+REVOLUTION+7.png",
      name: "Nike Air Max 270",
      price: 4350,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 11,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd2a2802-13aa-41cf-865f-7d86889278cb/AIR+FORCE+1+LOW.png",
      name: "Nike Air Max 2090",
      price: 15000,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 12,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74314616-4fc7-460d-ab31-a8248b599a20/NIKE+DUNK+LOW+RETRO.png",
      name: "Nike Air Force 1 '07",
      price: 11020,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 13,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00366317-b552-4167-96f5-824ce1a4ea74/AIR+FORCE+1+%2707+LV8+1.png",
      name: "Nike Air Max 1",
      price: 1270,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 14,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/73682086-2e6b-4ce1-b2be-ce0f97a27442/AIR+JORDAN+4+RETRO.png",
      name: "Nike Air Max 95",
      price: 1800,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 15,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/64f064e4-4731-45ed-9e10-0e6b80fa4b1a/AIR+VAPORMAX+2023+FK+SE.png",
      name: "Nike Air Jordan 4 Retro",
      price: 2000,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 16,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/62859aa3-1dcf-4733-a6c3-e3f95ae64dea/JORDAN+ONE+TAKE+5+PARIS+PF.png",
      name: "Nike Air Max 98",
      price: 6753,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 17,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f55d934-bac4-4cb3-8d67-bb6c71121d03/AIR+FORCE+1+%2707.png",
      name: "Nike Air Jordan 3 Retro",
      price: 7922,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 18,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a7a15ed-0c51-4262-88ac-eba8e3783091/NIKE+ASUNA+3+SLIDE+NN.png",
      name: "Nike Air Max 720",
      price: 3460,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 19,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/85856382-79b6-4f28-af1e-4c056d371290/AIR+JORDAN+1+MID+SE.png",
      name: "Nike Air Max 270 React",
      price: 16759,
      category: "Womens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
    {
      id: 20,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d970ad2c-272d-4ceb-a1fc-4f499e81a0c7/AIR+JORDAN+1+LOW+G.png",
      name: "Nike Air Jordan 12",
      price: 19020,
      category: "Mens",
      description:
        "Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
    },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Navbar count={cart.length} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/product"
            element={
              <Product
                ShoeData={ShoeData}
                setShoeData={setShoeData}
                addToCart={addToCart}
              />
            }
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails ShoeData={ShoeData} />}
          ></Route>
          <Route path="/cart" element={<Cart cart={cart} CART={CART} setCART={setCART}/>}></Route>
          <Route path="/orderplaced" element={<OrderPlaced/>} CART={CART}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
