// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Import your pages
import CartPage from "./pages/CartPage";
import CheckoutForm from "./pages/CheckoutForm";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    // Wrap everything in Redux Provider
    <Provider store={store}>
      <Router>
        {/* Simple Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
          <Link to="/" className="font-bold text-xl">
            My E‑Commerce Store
          </Link>
          <div className="flex gap-4">
            <Link to="/cart" className="hover:underline">
              Cart
            </Link>
            <Link to="/checkout" className="hover:underline">
              Checkout
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Default route goes to CartPage for now (matches screenshot) */}
          <Route path="/" element={<CartPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
