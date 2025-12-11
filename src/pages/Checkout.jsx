import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../styles/checkout.css";

const stripePromise = loadStripe("pk_test_your_publishable_key_here");

function CheckoutForm({ cartItems, onCancel }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [delivery, setDelivery] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card"); // "card" or "cod"
  const [message, setMessage] = useState("");

  const handleChange = (e) => setDelivery({ ...delivery, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      delivery,
      items: cartItems,
      total: subtotal,
      date: new Date().toLocaleString(),
      paymentMethod,
      status: "Pending"
    };

    // save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    if (paymentMethod === "card") {
      // Here you would integrate Stripe payment
      alert("Card payment successful! Order Placed.");
    } else {
      alert("Order Placed! Please pay on delivery.");
    }

    setMessage(`Order placed successfully using ${paymentMethod === "card" ? "Card" : "Cash on Delivery"}!`);
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-modal">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <button className="close-btn" onClick={onCancel}>X</button>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Details</h2>
          <input type="text" name="name" placeholder="Full Name" value={delivery.name} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Complete Address" value={delivery.address} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={delivery.city} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" value={delivery.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={delivery.email} onChange={handleChange} required />

          <h2>Payment Method</h2>
          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            /> Card Payment
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            /> Cash on Delivery
          </label>

          {paymentMethod === "card" && (
            <div className="card-element">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
          )}

          <button type="submit" className="place-order-btn">
            {paymentMethod === "card" ? `Pay ${subtotal} PKR` : "Place Order (COD)"}
          </button>

          {message && <p className="payment-message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default function Checkout({ cartItems, onCancel }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm cartItems={cartItems} onCancel={onCancel} />
    </Elements>
  );
}
