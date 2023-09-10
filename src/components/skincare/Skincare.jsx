import React from 'react'

function Skincare({product}) {
  return (
    <div className="skincare-section">
      <div className="skincare box">
        <div className="images">
          <img
            className="image"
            src={product.thumbnail}
            alt={product.description}
          />
        </div>
        <div className="skincare desc">
          <p className="skincare-text description">{product.description}</p>
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

        {/* img 
          description
          rating
          brand
          price & discounted percentage
      */}
      </div>
    </div>
  );
}

export default Skincare
