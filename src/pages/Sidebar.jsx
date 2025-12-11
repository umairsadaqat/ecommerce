import React from "react";
import "../styles/admin-dashboard.css";

export default function Sidebar({ activeSection, setActiveSection, onLogout }) {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li
          className={activeSection === "orders" ? "active" : ""}
          onClick={() => setActiveSection("orders")}
        >
          Orders
        </li>
        <li
          className={activeSection === "products" ? "active" : ""}
          onClick={() => setActiveSection("products")}
        >
          Products
        </li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </aside>
  );
}
