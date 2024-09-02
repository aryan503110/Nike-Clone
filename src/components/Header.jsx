import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="banner">
        <img
          src="https://c02.purpledshub.com/uploads/sites/41/2021/08/Alamy_2F3Y8J0-crop-ff47efc.jpg"
          alt="Banner"
        />
      </div>
      <div className="hero-content">
        <h6>Lifestyle Running Shoes</h6>
        <h1>EXTRA-ORDINARY</h1>
        <h6>
          Meet the latest collection of retro running inspired shoes. The
          unlikely heroes of your easiest styling hack.
        </h6>
        <button>
          <a href="/product">Shop</a>
        </button>
      </div>
      <div className="product-grid">
        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png"
            alt="Air Max DN"
          />
          <h3>For Leading with Style</h3>
          <button>
            <a href="/product">Explore</a>
          </button>
        </div>
        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9aa935dd-d653-4d82-9cf6-e6de6f8bca0b/NIKE+E-SERIES+AD.png"
            alt="E-Series AD"
          />
          <h3>Explore the Outdoors</h3>
          <button>
            <a href="/product">Explore</a>
          </button>
        </div>
        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7df57edf-bdc6-4320-a956-8ce37228cd1d/NIKE+REVOLUTION+6+NN.png"
            alt="Revolution 6 NN"
          />
          <h3>Killshot 2</h3>
          <button>
            <a href="/product">Explore</a>
          </button>
        </div>
        
      </div>
      <div className="hero-content">
        <h6>Jordan Apparel</h6>
        <h1>EARTH TONES</h1>
        <h6>
          Ground your look in earthy tones inspired by outdoor courts.Details like knits,ripcords,and cargo pockets add rich texture to your fit.
        </h6>
        <button>
          <a href="/product">Shop</a>
        </button>
      </div>
      <div className="product-grid">
        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/NIKE+REACTX+INFINITY+RUN+4+OLY.png"
            alt="Air Max DN"
          />
          <h3>Nike Originals</h3>
          <button>
            <a href="/product">Explore</a>
          </button>
        </div>
        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73438f5c-8fa8-4bd2-9676-ac206c90b691/NIKE+AIR+MAX+1.png"
            alt="E-Series AD"
          />
          <h3>Earthy Ones</h3>
          <button>
            <a href="/product">Explore</a>
          </button>
        </div>
        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/80aaf2ae-536c-4cb7-891a-9920a3a3af6f/NIKE+DUNK+LOW+NN.png"
            alt="Revolution 6 NN"
          />
          <h3>Jordan Air 2</h3>
          <button>
            <a href="/product">Explore</a>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
