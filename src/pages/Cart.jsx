import "../styles/cart.css";

export default function Cart({ cartItems, onClose, updateQuantity, onCheckout }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-page">
        <div className="cart-header">
          <h1>Your Cart</h1>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>

        {cartItems.length === 0 ? (
          <p>No items in your cart yet.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <span>{item.name}</span>
                <span>{item.price * item.quantity} PKR</span>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(index, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <h3>Subtotal: {subtotal} PKR</h3>
            <button className="checkout-btn" onClick={onCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
