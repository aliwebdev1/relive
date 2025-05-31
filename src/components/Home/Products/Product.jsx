import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import star from "../../../assets/images/icons/star.png";
const Product = ({ product }) => {
  const { shipping, ratings, img, price, category, name } = product;
  return (
    <div className="card p-4 bg-[#F8F8F8] shadow-sm">
      <figure>
        <img
          className="w-full h-30 md:h-56 border-0"
          src={img}
          alt="product name"
        />
      </figure>
      <div className="card-body p-0 md:space-y-4">
        <h2 className="card-title mt-4">{name}</h2>
        <p className="flex justify-between">
          <span className="font-bold text-xl"> ${price}</span>
          <span className="flex items-center text-secondary">
            <img className="w-4 h-4 mr-2" src={star} alt="" /> {ratings} Ratings
          </span>
        </p>
        <button className="btn btn-primary bg-primary text-white font-semibold rounded-4xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
