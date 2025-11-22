import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/">
          <a className="brand">
            Cafe<span>Co</span>
          </a>
        </Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart" className="cart">
            Cart {cartCount > 0 ? `(${cartCount})` : ""}
          </Link>
        </nav>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
