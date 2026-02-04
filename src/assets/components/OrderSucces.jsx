// src/pages/OrderSuccess.jsx
import React from "react";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Successful!
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your items will be shipped soon.
      </p>
      <a
        href="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </a>
    </div>
  );
};

export default OrderSuccess;
