import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import OrdersSection from "./OrdersSection";
import ProductsSection from "./ProductsSection";
import "../styles/admin-dashboard.css";

export default function AdminDashboard({ onLogout }) {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeSection, setActiveSection] = useState("orders");

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);

    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  // Update order status
  const updateStatus = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Add product
  const addProduct = (product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  // Delete product
  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} onLogout={onLogout} />

      <main className="admin-content">
        {activeSection === "orders" && (
          <OrdersSection orders={orders} updateStatus={updateStatus} />
        )}
        {activeSection === "products" && (
          <ProductsSection products={products} addProduct={addProduct} deleteProduct={deleteProduct} />
        )}
      </main>
    </div>
  );
}
