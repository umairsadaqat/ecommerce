import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import CartButton from "./pages/CartButton";
import WhatsAppButton from "./pages/WhatsAppButton";

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
      // Product exists, increase quantity
      const newCart = [...cartItems];
      newCart[existingIndex].quantity += 1;
      setCartItems(newCart);
    } else {
      // Add new product
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    alert(`${product.name} added to cart!`);
  };

  // ======================
  // UPDATE CART QUANTITY
  // ======================
  const updateQuantity = (productId, delta) => {
    const newCart = cartItems
      .map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + delta } : item
      )
      .filter(item => item.quantity > 0); // remove if quantity <= 0
    setCartItems(newCart);
  };

  // ======================
  // CALCULATE TOTAL QUANTITY
  // ======================
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // ======================
  // ADMIN LOGIN CLICKED
  // ======================
  const handleAdminClick = () => {
    setShowAdminLogin(true);
  };

  // ======================
  // RENDER
  // ======================
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

  if (isAdminLoggedIn) {
    return <AdminDashboard onLogout={() => setIsAdminLoggedIn(false)} />;
  }

  return (
    <>
      <Navbar
        cartCount={totalCartCount}
        onCartClick={() => setShowCart(true)}
        onAdminClick={handleAdminClick}
      />

      <Home />
      <About />
      <Products onAddToCart={handleAddToCart} />
      <Contact />
      <Footer />

      {/* Mobile Cart Button */}
      <CartButton cartCount={totalCartCount} onClick={() => setShowCart(true)} />
      <WhatsAppButton /> {/* ✅ Show on all pages */}

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
        <Checkout cartItems={cartItems} onCancel={() => setShowCheckout(false)} />
      )}
    </>
  );
}
