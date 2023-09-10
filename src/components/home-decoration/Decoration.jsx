import React from "react";

function Decoration({ product }) {
  return (
    <div className="Home-decoration-section">
      <div className="Home-decoration box">
        <div className="images">
          <img
            className="image"
            src={product.thumbnail}
            alt={product.description}
          />
        </div>
        <div className="Home-decoration desc">
          <p className="Home-decoration-text description">
            {product.description}
          </p>
          <span>
            <span className="rating">RATING : </span>
            {product.rating} ⭐⭐⭐
          </span>
          <p className="brand">
            <span className="rating">BRAND : </span>
            {product.brand}
          </p>
          <div className="pricing">
            <p className="rate">${product.price}</p>
            <span className="discount">
              Discounted - {product.discountPercentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decoration;
