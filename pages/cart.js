import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, cartTotal } = useCart();
  if (cart.length === 0)
    return (
      <div className="container">
        <h2>Your Cart</h2>
        <p className="muted">
          Cart is empty. <Link href="/menu">Browse menu</Link>
        </p>
      </div>
    );
  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-row" key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <div className="muted">₹{item.price} each</div>
            </div>
            <div className="cart-controls">
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) =>
                  updateQty(item.id, Math.max(1, parseInt(e.target.value || 1)))
                }
              />
              <button
                className="btn-sm btn-ghost"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div>
          Total: <strong>₹{cartTotal}</strong>
        </div>
        <Link href="/checkout" className="btn">
          Checkout
        </Link>
      </div>
    </div>
  );
}
