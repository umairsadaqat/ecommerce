export default function Sidebar({
  activeSection,
  setActiveSection,
  onLogout,
  menuOpen,
  setMenuOpen
}) {
  return (
    <aside className={`sidebar ${menuOpen ? "open" : ""}`}>

      

      <h2>Admin</h2>

      <ul>
        <li
          className={activeSection === "orders" ? "active" : ""}
          onClick={() => {
            setActiveSection("orders");
            setMenuOpen(false);
          }}
        >
          Orders
        </li>

        <li
          className={activeSection === "products" ? "active" : ""}
          onClick={() => {
            setActiveSection("products");
            setMenuOpen(false);
          }}
        >
          Products
        </li>
      </ul>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </aside>
  );
}
