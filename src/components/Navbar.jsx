import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/home.png";
import cartIcon from "../assets/cart.png";

export default function Navbar({ cartCount, onCartClick, onAdminClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Tapal Chai" className="logo-img" />
        <span className="logo-text">Tapal Chai</span>
      </div>

      <button className="menu-toggle1" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><button onClick={() => scrollTo("home")}>Home</button></li>
        <li><button onClick={() => scrollTo("about")}>About</button></li>
        <li><button onClick={() => scrollTo("products")}>Products</button></li>
        <li><button onClick={() => scrollTo("contact")}>Contact</button></li>

        <li>
          <button className="admin-btn" onClick={onAdminClick}>
            Admin
          </button>
        </li>

        <li>
          <button className="cart-link" onClick={onCartClick}>
            <img src={cartIcon} alt="Cart" className="cart-icon" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}
