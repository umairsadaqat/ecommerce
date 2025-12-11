import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  // ======================
  // CART STATES
  // ======================
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // ======================
  // ADMIN STATES
  // ======================
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // ======================
  // ADD TO CART
  // ======================
  const handleAddToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex >= 0) {
      const newCart = [...cartItems];
      newCart[existingIndex].quantity += 1;
      setCartItems(newCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart!`);
  };

  // ======================
  // UPDATE CART QUANTITY
  // ======================
  const updateQuantity = (index, delta) => {
    const newCart = [...cartItems];
    newCart[index].quantity += delta;
    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    }
    setCartItems(newCart);
  };

  // ======================
  // ADMIN LOGIN CLICKED
  // ======================
  const handleAdminClick = () => {
    setShowAdminLogin(true);
  };

  // ======================
  // RENDER
  // ======================
  // 1️⃣ Show Admin Login form only
  if (showAdminLogin && !isAdminLoggedIn) {
    return (
      <Admin
        onLogin={() => {
          setIsAdminLoggedIn(true);
          setShowAdminLogin(false);
        }}
      />
    );
  }

  // 2️⃣ Show Admin Dashboard only
  if (isAdminLoggedIn) {
    return (
      <AdminDashboard
        onLogout={() => setIsAdminLoggedIn(false)}
      />
    );
  }

  // 3️⃣ Normal user view
  return (
    <>
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setShowCart(true)}
        onAdminClick={handleAdminClick}
      />

      <Home />
      <About />
      <Products onAddToCart={handleAddToCart} />
      <Contact />
      <Footer />

      {showCart && (
        <Cart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          updateQuantity={updateQuantity}
          onCheckout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
        />
      )}

      {showCheckout && (
        <Checkout
          cartItems={cartItems}
          onCancel={() => setShowCheckout(false)}
        />
      )}
    </>
  );
}
