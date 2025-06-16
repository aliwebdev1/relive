import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const cartItem = localStorage.getItem("cartItems");
    setCartItem(JSON.parse(cartItem));
  }, []);


  console.log(cartItem)

  return (
    <div className="p-10 md:px-30">
      <h1 className="text-center text-5xl mt-10 font-bold ">
        Cart <span className="text-primary">Details</span>
      </h1>

      <div className="flex  justify-center gap-5 mt-10 ">
        <div className="bg-[#F8F8F8] grow p-10 rounded-2xl">
         {
            cartItem ?  cartItem?.map((item) => <div key={item?.id}></div>)  : ""
         }
        </div>

        <div className="bg-[#F8F8F8] w-[400px] p-10 rounded-2xl">
          <h2 className="text-lg font-semibold">Cart Summary </h2>
          <div className="space-y-2 mt-5">
            <div className="flex items-center justify-between ">
              <h2 className="text-black/70">subtotal</h2>
              <h2 className="font-bold text-black">$1000</h2>
            </div>

            <div className="flex items-center justify-between ">
              <h2 className="text-black/70">Shipping</h2>
              <h2 className="text-black/70">Calculated at Checkout</h2>
            </div>

            <div className="flex items-center justify-between ">
              <h2 className="text-black/70">subtotal</h2>
              <h2 className="font-bold text-black">$57</h2>
            </div>
          </div>

          <hr className="my-5 text-primary" />
          <div className="flex items-center justify-between ">
            <h2 className="text-black/70">Total</h2>
            <h2 className="font-bold text-black">$1057</h2>
          </div>

          <button className="bg-primary  flex gap-3 items-center justify-center mt-8 rounded-full text-lg w-full p-5 px-8 text-white font-semibold  ">
            Proceed to checkout <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
