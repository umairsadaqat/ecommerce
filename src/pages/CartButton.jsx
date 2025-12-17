import React from "react";
import cartIcon from "../assets/cart.png";
import "../styles/cartButton.css";

export default function CartButton({ cartCount, onClick }) {
  return (
    <button className="cart-button" onClick={onClick}>
      <img src={cartIcon} alt="Cart" />
      {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </button>
  );
}
