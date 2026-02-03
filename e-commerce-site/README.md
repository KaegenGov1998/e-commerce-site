Group Capstone Project – E-Commerce Website
Overview

This project is a frontend e-commerce application developed as a group capstone project. The application is built strictly from a provided Figma design and focuses on UI accuracy, component-based architecture, client-side state management, and a complete shopping workflow.

All data is managed on the client side with Redux Toolkit, with cart persistence implemented using localStorage. No backend services are used.

Project Objectives:
Accurately reproduce the provided Figma design
Implement a complete shopping experience from product browsing to checkout
Apply best practices in React component structure and routing
Manage global application state using Redux Toolkit
Validate user input and compute derived values such as totals and quantities
Deliver clean, readable, and maintainable code

Technology Stack:
React (Functional components and Hooks)
Tailwind CSS (Utility-first styling)
React Router DOM (Client-side routing)
Redux Toolkit (Global state management)
LocalStorage (Cart persistence)

Development Tools:
Redux DevTools
ESLint & Prettier
Git & GitHub

Design Reference
The user interface is built to closely match the provided Figma design:

E-Commerce Store — Melsoft Academy
Design fidelity includes layout, spacing, typography, colors, and responsiveness.

Application Features:
Responsive home page with product listings
Sidebar navigation menu
Search functionality with local filtering
Product detail pages
Shopping cart overview and full cart management
Quantity control and item removal
Checkout process with shipping and payment forms
Order summary with calculated totals
Order success confirmation page

Routes
Route	Description
/	Home page with product grid and navigation
/product/:id	Product detail page
/cart	Cart management page
/checkout	Checkout process
/order-success	Order confirmation page

Component Structure:
App – Root component and router configuration
Navbar – Top navigation, cart icon, search input
Sidebar – Toggleable menu
ProductCard – Reusable product preview component
ProductList – Product grid rendering
ProductDetail – Product information and add-to-cart logic
CartSummary – Mini cart overview
CartPage – Full cart management
CheckoutForm – Shipping and payment forms
OrderSuccess – Static confirmation page

Optional reusable UI components include buttons, inputs, badges, and modals.

Data Management
Product data is stored locally in src/data/products.js

Example product structure:
{
  id: 'p123',
  name: 'Product Name',
  price: 299.99,
  category: 'Shoes',
  description: 'Product description',
  image: '/assets/img.jpg'
}

State Management
Global state is handled using Redux Toolkit.

Redux Slices:
cartSlice
addItem
removeItem
increaseQty
decreaseQty
clearCart

uiSlice (optional):
toggleSidebar
modal control actions

Selectors:
selectCartItems
selectCartTotalQuantity
selectCartTotalPrice

Cart data is automatically persisted to localStorage to maintain state between sessions.

Styling Approach:
Tailwind CSS configured to align with Figma design tokens
Utility classes used for consistency and maintainability
Fully responsive layout across all screen sizes

Installation & Usage:
npm install
npm run dev

Deliverables:
Fully functional React e-commerce application
Redux-managed cart with persistence
Responsive UI aligned with Figma design
GitHub repository with clear documentation

Optional Enhancements:
Product filtering and category selection
Sorting by price or popularity
Payment flow simulation

Collaboration Workflow:
Feature-based branching strategy
Pull request reviews
Agreed-upon folder structure and naming conventions
Clear task delegation among team members

