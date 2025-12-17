import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import OrdersSection from "./OrdersSection";
import ProductsSection from "./ProductsSection";
import "../styles/admin-dashboard.css";

export default function AdminDashboard({ onLogout }) {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeSection, setActiveSection] = useState("orders");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  // Order status
  const updateStatus = (index, newStatus) => {
    const updated = [...orders];
    updated[index].status = newStatus;
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // Product handlers
  const updateProduct = (index, product) => {
    const updated = [...products];
    updated[index] = product;
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const addProduct = (product) => {
    const updated = [...products, product];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const deleteProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div className="admin-dashboard-container">

      {/* 🔥 SINGLE TOGGLE BUTTON */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onLogout={onLogout}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="admin-content">
        {activeSection === "orders" && (
          <OrdersSection orders={orders} updateStatus={updateStatus} />
        )}

        {activeSection === "products" && (
          <ProductsSection
            products={products}
            addProduct={addProduct}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        )}
      </main>
    </div>
  );
}
