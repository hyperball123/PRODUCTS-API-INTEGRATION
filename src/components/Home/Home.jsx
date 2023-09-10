import React from "react";
import "./Home.css";

// 5 smartphones
// 5 laptops
// 5 fragrances
// 5 skincare
// 5 groceries
// 5 home-decoration

// function Home({ products }) {
function Home() {
  return (
    <div>
      {/* <ul>
        {products.map((products, index) => (
          <li key={products.id}>
            <h2>{products.title}</h2>
            <ul>
              {products.images.map((image, imageIndex) => (
                <li key={imageIndex}>
                  <img
                    src={image}
                    alt={`${products.title} ${imageIndex + 1}`}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
