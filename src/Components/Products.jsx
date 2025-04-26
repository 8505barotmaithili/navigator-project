import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((ele) => (
        <div key={ele.id}>
          <Link to={`/description/${ele.id}`}>
            <img src={ele.image} alt={ele.title} width="150" />
          </Link>

          <h2>{ele.title}</h2>
          <h3>${ele.price}</h3>
          <p>{ele.category}</p>
        </div>
      ))}
    </div>
  );
};
export default Products;
