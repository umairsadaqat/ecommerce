import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const index = cartItems.findIndex(item => item.id === product.id);
    let newCart = [...cartItems];

    if (index >= 0) {
      newCart[index].quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCartItems(newCart);
    toast.success(`${product.name} added to cart`);
  };

  // ======================
  // UPDATE CART QUANTITY
  // ======================
  const updateQuantity = (productId, delta) => {
    setCartItems(
      cartItems
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // ======================
  // ADMIN LOGIN VIEW
  // ======================
  if (showAdminLogin && !isAdminLoggedIn) {
    return (
      <>
        <ToastContainer />
        <Admin
          onLogin={() => {
            setIsAdminLoggedIn(true);
            setShowAdminLogin(false);
          }}
        />
      </>
    );
  }

  // ======================
  // ADMIN DASHBOARD
  // ======================
  if (isAdminLoggedIn) {
    return (
      <>
        <ToastContainer />
        <AdminDashboard
          onLogout={() => {
            setIsAdminLoggedIn(false);
            toast.info("Admin Logged Out");
          }}
        />
      </>
    );
  }

  // ======================
  // MAIN WEBSITE
  // ======================
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Navbar
        cartCount={totalCartCount}
        onCartClick={() => setShowCart(true)}
        onAdminClick={() => setShowAdminLogin(true)}
      />

      {/* ALL SECTIONS ALWAYS RENDERED */}
      <Home />
      <About />
      <Products onAddToCart={handleAddToCart} />
      <Contact />
      <Footer />

      <CartButton
        cartCount={totalCartCount}
        onClick={() => setShowCart(true)}
      />
      <WhatsAppButton />

      {showCart && (
        <Cart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          onClose={() => setShowCart(false)}
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
    clearCart={() => setCartItems([])} // <-- clear cart after order
  />
      )}
    </>
  );
}
