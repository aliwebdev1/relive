import React, { useEffect, useState } from "react";
import Products from "../Home/Products/Products";
import Product from "../Home/Products/Product";
import Cart from "./Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="px-5 md:px-30 py-0 md:py-10">
      <div className="text-center md:w-1/2 mx-auto p-3 md:p-0">
        <h2 className="text-2xl md:text-5xl font-semibold mt-8 md:mt-0">
          Our <span className="text-primary">Products</span>
        </h2>
        <p className="text-secondary mt-2">
          Optimize your results with expertly curated peptide combinations
          designed to enhance effectiveness and deliver maximum benefits.
        </p>
      </div>

      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5 md:py-10">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="z-50  fixed top-[10px] right-11 md:right-40 rounded-2xl">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
