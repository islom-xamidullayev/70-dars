import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data.data); // Konsolda ma'lumotlarni tekshirish
        setProducts(data.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  

  return (

    <div className="product-container">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image}  alt={product.name} className="product-image" />
            <h3 className="product-name"> <NavLink to={`/card/product/${product.id}`} >{product.name}</NavLink> </h3>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
  
};

export default Products;


