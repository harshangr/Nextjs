import { useRouter } from 'next/router'
import menu from '../../data/menu'
import { useCart } from '../../context/CartContext'

export default function ProductPage(){
  const router = useRouter()
  const { id } = router.query
  const product = menu.find(m=>m.id===id)
  const { addToCart } = useCart()
  if(!product) return <div className="container"><p>Loading…</p></div>
  return (
    <div className="container detail">
      <div className="detail-grid">
        <div className="detail-media"><svg viewBox="0 0 400 260"><rect width="400" height="260" fill="#f6f6f6"/></svg></div>
        <div>
          <h2>{product.name}</h2>
          <p className="muted">{product.description}</p>
          <p className="price">₹{product.price}</p>
          <div className="row">
            <button className="btn" onClick={()=>{ addToCart(product) }}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
