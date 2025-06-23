import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartItems = ({ item , setDoReRender}) => {
  const [quantity, setQuantity] = useState(item?.quantity);


  const updateQuantity = (delta) => {
    const newQuantity = quantity + (delta == "+" ? 1 : (quantity > 0 ?  -1 : 0) )
    setQuantity(newQuantity)

    const cartItem = JSON.parse(localStorage.getItem("cartItems"))
    const findItems = cartItem.find(product => product.id == item.id)
    findItems.quantity = newQuantity
    
    localStorage.setItem("cartItems" , JSON.stringify(cartItem))
    setDoReRender(prev => !prev)
  }

//   const handleIncreasePrice = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);

//     const cartItems = JSON.parse(localStorage.getItem("cartItems"));

//     const findItems = cartItems.find((product) => product.id == item?.id);

//     findItems.quantity = newQuantity;
//     console.log(findItems);

//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 0) {
//       const newQuantity = quantity - 1;

//       setQuantity(newQuantity);
//       const cartItems = JSON.parse(localStorage.getItem("cartItems"));

//       const findItems = cartItems.find((product) => product.id == item?.id);

//       findItems.quantity = newQuantity;
//       console.log(findItems);

//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }
//   };

  return (
    <div className="flex items-center gap-5">
      <img
        className="w-[100px]"
        src="src/assets/images/Image-1.png"
        alt="ProductImage"
      />
      <h2 className="font-semibold text-center max-w-[200px]">{item?.name}</h2>

      <div className="flex bg-white p-2 items-center gap-5">
        <FaMinus onClick={() => updateQuantity("-")} />
        <h2>{quantity} </h2>
        <FaPlus onClick={() => updateQuantity("+")} />
      </div>

      <h1 className="text-2xl font-semibold">${(item?.price * quantity).toFixed(2)}</h1>
    </div>
  );
};

export default CartItems;
