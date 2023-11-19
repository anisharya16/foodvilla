import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" p-5 m-5">
      <div className="flex">
        <span className="p-2 m-2 bg-slate-300 border border-gray-200 rounded-lg">
          Total items in cart: {cartItems.length}
        </span>
        <button
          className="p-2 m-2 bg-red-500 rounded-lg border border-cyan-200"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex mt-2">
        {cartItems.map((item) => {
          {
            console.log(item);
          }
          return <FoodItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
