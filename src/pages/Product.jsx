import React, { useState, useEffect } from 'react'
import './Product.css'
import {useNavigate} from 'react-router-dom';

function Product({ShoeData,setselectedShoe,addToCart}) {
  const MyNav=useNavigate()
  const [filteredData, setFilteredData] = useState(ShoeData);
  
  useEffect(() => {
    setFilteredData(ShoeData);
  }, [ShoeData]);

  return (
    <div className="product-page">
      <div className="filter">
        <div className="filter-item">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            onChange={(e) => {
              let Selected = e.target.value;
              if (Selected === 'All') {
                setFilteredData(ShoeData);
              } else {
                let newData = ShoeData.filter((e) => e.category === Selected);
                setFilteredData(newData);
              }
            }}
          >
            <option value="All">All</option>
            <option value="Mens">Mens</option>
            <option value="Womens">Womens</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="pricing">Pricing</label>
          <input 
            type="range" 
            id="pricing" 
            min={1270} 
            max={20000} 
            onChange={(e) => {
              let Selected = e.target.value;
              let newData = ShoeData.filter((item) => item.price <= Selected);
              setFilteredData(newData);
            }}
          />
        </div>
      </div>
      <div className="shoes-grid">
        {filteredData.map((e, index) => (
          <div key={index} className="shoe-card" >
            <img src={e.img} alt={e.name} onClick={()=>{
            MyNav(`/product/${e.id}`)
          }}/>
            <div className="shoe-info">
              <h2 className="shoe-name">{e.name}</h2>
              <p className="shoe-price">$ {e.price}</p>
              <div className="shoe-meta">
                <span>Category: {e.category}</span>
              </div> 
              <button className="add-to-cart" onClick={()=>addToCart(e)}>Add to Cart</button>
              <div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product