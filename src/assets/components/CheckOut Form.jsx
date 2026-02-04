// src/pages/CheckoutForm.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  // Local state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.address) newErrors.address = "Address is required";
    if (formData.cardNumber.length < 16)
      newErrors.cardNumber = "Card number must be 16 digits";
    if (!formData.expiry) newErrors.expiry = "Expiry date required";
    if (formData.cvv.length < 3) newErrors.cvv = "CVV must be 3 digits";
    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Normally you'd send data to backend, but here we just navigate
      navigate("/order-success");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Order Summary */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        {cartItems.map((item) => (
          <p key={item.id} className="text-sm text-gray-600">
            {item.name} × {item.quantity} — ${item.price.toFixed(2)}
          </p>
        ))}
        <p className="mt-2 font-bold">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Shipping Info */}
        <h3 className="text-lg font-semibold">Shipping Info</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address}</p>
        )}

        {/* Payment Info */}
        <h3 className="text-lg font-semibold mt-6">Payment Info</h3>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber}</p>
        )}

        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={formData.expiry}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.expiry && (
          <p className="text-red-500 text-sm">{errors.expiry}</p>
        )}

        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
