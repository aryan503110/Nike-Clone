import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";  // Make sure to import the CSS file

function ProductDetails({ ShoeData}) {
  let { id } = useParams();
  let shoe = ShoeData.find((u) => u.id === parseInt(id));
  
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={shoe.img} alt={shoe.name} />
      </div>
      <div className="product-info">
        <p className="product-name">{shoe.name}</p>
        <p className="product-price">${shoe.price}</p>
        <p className="product-category">Category: {shoe.category}</p>
        <p>{shoe.description}</p>
        <button className="back"><a href="/product">Back to Products</a></button>
      </div>
    </div>
  );
}

export default ProductDetails;