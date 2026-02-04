// src/pages/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
  increaseQty,
  decreaseQty,
  removeItem,
} from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems); // get items from Redux
  const totalPrice = useSelector(selectCartTotalPrice); // derived selector

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* LEFT SIDE: Cart Items */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Check your Bag Items</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              {/* Product Info */}
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-yellow-500 text-sm">
                  ★★★★★ {item.rating} / 5
                </p>
                <p className="text-blue-600 font-bold">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500 text-sm ml-4"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE: Bag Summary */}
      <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Bag</h3>

        {/* Thumbnails */}
        <div className="flex gap-2 mb-4">
          {cartItems.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
          ))}
        </div>

        {/* Total */}
        <p className="text-lg font-semibold mb-4">
          Bag Total: ${totalPrice.toFixed(2)}
        </p>

        {/* Checkout Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
