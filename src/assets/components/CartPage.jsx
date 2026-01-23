import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">🛍️ Check your Bag Items</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-yellow-500 text-sm">⭐ {item.rating}/5</p>
                <p className="text-gray-800 font-bold">
                  ${item.price.toFixed(2)} × {item.qty}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-3">{item.qty}</span>
              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white shadow-md rounded-lg p-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Bag Total:</h2>
        <p className="text-2xl font-bold text-green-600">${totalPrice.toFixed(2)}</p>
        <button className="ml-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
