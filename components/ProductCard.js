import Link from "next/link";
export default function ProductCard({ p, onAdd }) {
  return (
    <article className="card">
      <div className="card-media" aria-hidden>
        <svg viewBox="0 0 200 120" preserveAspectRatio="none">
          <rect width="200" height="120" fill="#f4f4f4" />
        </svg>
      </div>
      <div className="card-body">
        <h4>{p.name}</h4>
        <p className="muted">{p.description}</p>
        <div className="card-row">
          <strong>₹{p.price}</strong>
          <div>
            <button className="btn-sm" onClick={() => onAdd(p)}>
              Add
            </button>
            <Link href={`/menu/${p.id}`} className="link">
              Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
