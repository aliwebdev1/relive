import React, { useEffect, useState } from "react";
import Product from "./Product";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setVisibleItems(data.slice(0, 4)); // show only first 4 items initially
      });
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
    setVisibleItems(products); // show all items
  };

  const handleLess = () => {
    setShowAll(false);
    setVisibleItems(products.slice(0, 4)); // fixed: use 'products' instead of 'data'
  };

  return (
    <div className="px-5 md:px-30">
      <div className="text-center md:w-1/2 mx-auto p-3 md:p-0">
        <h2 className="text-2xl md:text-5xl font-semibold mt-8 md:mt-0">
          Our <span className="text-primary">Products</span>
        </h2>
        <p className="text-secondary mt-2">
          Optimize your results with expertly curated peptide combinations
          designed to enhance effectiveness and deliver maximum benefits.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5 md:py-10">
        {visibleItems.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mb-10">
          <button
            onClick={handleSeeMore}
            className="btn btn-primary bg-primary text-white font-semibold rounded-4xl"
          >
            See more
          </button>
        </div>
      )}

      {showAll && (
        <div className="flex justify-center mb-10">
          <button
            onClick={handleLess}
            className="btn btn-primary bg-primary text-white font-semibold rounded-4xl"
          >
            See less
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
