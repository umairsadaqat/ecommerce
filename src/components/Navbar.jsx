import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/home.png";
import cartIcon from "../assets/cart.png";

export default function Navbar({ cartCount, onCartClick, onAdminClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Tapal Chai" className="logo-img" />
        <span className="logo-text">Tapal Chai</span>
      </div>

      {/* Hamburger Toggle */}
      <button className="menu-toggle1" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li>
          <button className="admin-btn" onClick={() => { onAdminClick(); setMenuOpen(false); }}>Admin</button>
        </li>
        <li>
          <button className="cart-link" onClick={onCartClick}>
            <img src={cartIcon} alt="Cart" className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}
