// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.color}</p>
        <p className="text-sm text-yellow-500">★★★★★ {item.rating} / 5</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">${item.price.toFixed(2)} × {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
