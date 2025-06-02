import React from "react";

import { Link } from "react-router-dom";
import cart from "../../assets/images/icons/cart.png";

const Cart = () => {
  return (
    <div>
      <Link
        to="/"
        className="relative border-2 border-secondary rounded-full w-12 h-12 flex justify-center items-center me-4"
      >
        <img className="w-5 h-5" src={cart} alt="" />{" "}
        <p className="absolute -top-2  -right-2 z-20 border-2 border-primary w-5 h-5 rounded-full flex justify-center items-center bg-primary text-white font-semibold">
          0
        </p>
      </Link>
    </div>
  );
};

export default Cart;
