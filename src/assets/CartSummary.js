// src/pages/CartSummary.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../data/products';
import { setCart, selectCartItems, selectCartTotal } from '../redux/cartSlice';
import CartItem from '../components/CartItem';

const CartSummary = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  useEffect(() => {
    dispatch(setCart(products));
  }, [dispatch]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Check your Bag Items</h1>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Bag Total: ${total.toFixed(2)}</h2>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
