import React, { useEffect, useState } from "react";
import "./Products.css";
import Axios from "axios";
import SmartPhones from "../../components/smartphones/SmartPhones";
import Laptops from "../../components/laptops/Laptops";
import Fragrance from "../../components/fragrance/Fragrance";
import Skincare from "../../components/skincare/Skincare";
import Groceries from "../../components/groceries/Groceries";
import Decoration from "../../components/home-decoration/Decoration";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Axios.get("https://dummyjson.com/products").then((response) => {
    //   console.log(response.data.products)
    // }).catch((error) => console.log(error));
    productsData();
  }, []);
  const productsData = async () => {
    try {
      const response = await Axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const smartphones = products
    .filter((product) => product.category === "smartphones")
    .slice(0, 5);
  const laptops = products
    .filter((product) => product.category === "laptops")
    .slice(0, 5);
  const fragrances = products
    .filter((product) => product.category === "fragrances")
    .slice(0, 5);
  const skincare = products
    .filter((product) => product.category === "skincare")
    .slice(0, 5);
  const groceries = products
    .filter((product) => product.category === "groceries")
    .slice(0, 5);
  const homeDecoration = products
    .filter((product) => product.category === "home-decoration")
    .slice(0, 5);

  return (
    <div className="Products-section">
      <div className="smartPhones">
        <h2>SmartPhones</h2>
        <div className="category">
          {smartphones.map((product) => (
            <SmartPhones key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h2>Laptops</h2>
        <div className="category">
          {laptops.map((product) => (
            <Laptops key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h2>Fragrance</h2>
        <div className="category">
          {fragrances.map((product) => (
            <Fragrance key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h2>Skincare</h2>
        <div className="category">
          {skincare.map((product) => (
            <Skincare key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h2>Groceries</h2>
        <div className="category">
          {groceries.map((product) => (
            <Groceries key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h2>Home-Decoration</h2>
        <div className="category">
          {homeDecoration.map((product) => (
            <Decoration key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
