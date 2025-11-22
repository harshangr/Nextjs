import Link from "next/link";
export default function Home() {
  return (
    <div className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Welcome to CafeCo</h1>
          <p className="lead">
            Your neighborhood coffee place — great beans, cozy seats, friendly
            faces.
          </p>
          <div className="cta-row">
            <Link href="/menu" className="btn">
              View Menu
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <svg viewBox="0 0 420 320" preserveAspectRatio="xMidYMid meet">
            <rect width="420" height="320" rx="14" fill="#fff" />
            <text x="30" y="170" font-size="24" fill="#ddd">
              Coffee Illustration
            </text>
          </svg>
        </div>
      </div>
      <section className="container features">
        <article className="feature">
          <h3>Fresh Beans</h3>
          <p>Locally roasted beans brewed to perfection.</p>
        </article>
        <article className="feature">
          <h3>Cozy Space</h3>
          <p>Comfortable seating for work or catching up.</p>
        </article>
        <article className="feature">
          <h3>Takeaway</h3>
          <p>Quick service for those on the go.</p>
        </article>
      </section>
    </div>
  );
}
