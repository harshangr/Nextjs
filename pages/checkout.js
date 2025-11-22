import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", notes: "" });
  const [done, setDone] = useState(false);

  function place(e) {
    e.preventDefault();
    if (!form.name || !form.phone) return alert("Name and phone required.");
    // Mock placing order
    setDone(true);
    clearCart();
  }

  if (cart.length === 0 && !done)
    return (
      <div className="container">
        <h2>Checkout</h2>
        <p className="muted">
          Your cart is empty. <Link href="/menu">Add items</Link>
        </p>
      </div>
    );

  return (
    <div className="container">
      <h2>Checkout</h2>
      {!done ? (
        <div className="checkout-grid">
          <form className="checkout-form" onSubmit={place}>
            <label>
              Name
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              Phone
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
            <label>
              Notes
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </label>
            <div className="row">
              <button className="btn" type="submit">
                Place Order
              </button>
            </div>
          </form>
          <aside className="order-summary">
            <h3>Order Summary</h3>
            <ul>
              {cart.map((i) => (
                <li key={i.id}>
                  {i.qty} × {i.name} — ₹{i.price * i.qty}
                </li>
              ))}
            </ul>
            <div className="muted">Total: ₹{cartTotal}</div>
          </aside>
        </div>
      ) : (
        <div className="notice">
          Thank you! Your order is placed. We'll contact you shortly.
        </div>
      )}
    </div>
  );
}
