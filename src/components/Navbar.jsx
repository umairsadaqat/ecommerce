import "../styles/navbar.css";
import logo from "../assets/home.png";
import cartIcon from "../assets/cart.png";

export default function Navbar({ cartCount, onCartClick, onAdminClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Tapal Chai" className="logo-img" />
        <span className="logo-text">Tapal Chai</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>

        {/* Admin Login */}
        <li>
          <button className="admin-btn" onClick={onAdminClick}>Admin</button>
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
