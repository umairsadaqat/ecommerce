export default function OrdersSection({ orders, updateStatus }) {
  return (
    <section>
      <h1>Customer Orders</h1>
      {orders.length === 0 ? (
        <p>No orders received yet.</p>
      ) : (
        <div className="order-list">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <h3>Order #{index + 1}</h3>
              <p><strong>Name:</strong> {order.delivery.name}</p>
              <p><strong>Address:</strong> {order.delivery.address}, {order.delivery.city}</p>
              <p><strong>Phone:</strong> {order.delivery.phone}</p>
              <p><strong>Email:</strong> {order.delivery.email}</p>

              <h4>Items:</h4>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>{item.name} — {item.quantity} × {item.price} PKR</li>
                ))}
              </ul>

              <p><strong>Total:</strong> {order.total} PKR</p>
              <p><strong>Payment Method:</strong> {order.paymentMethod === "card" ? "Card" : "Cash on Delivery"}</p>
              <p><strong>Status:</strong> {order.status || "Pending"}</p>

              <div className="status-buttons">
                {order.status !== "Sent" && (
                  <button onClick={() => updateStatus(index, "Sent")}>Mark as Sent</button>
                )}
                {order.status !== "Delivered" && (
                  <button onClick={() => updateStatus(index, "Delivered")}>Mark as Delivered</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
