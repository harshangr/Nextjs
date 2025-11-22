import menu from '../../data/menu'
import ProductCard from '../../components/ProductCard'
import { useCart } from '../../context/CartContext'

export default function Menu(){
  const { addToCart } = useCart()
  return (
    <div className="container">
      <h2>Our Menu</h2>
      <p className="muted">Coffee and crafted drinks made fresh.</p>
      <div className="grid">
        {menu.map(p=> <ProductCard key={p.id} p={p} onAdd={addToCart} />)}
      </div>
    </div>
  )
}
