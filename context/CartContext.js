import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({children}){
  const [cart, setCart] = useState([])

  useEffect(()=>{
    try {
      const raw = localStorage.getItem('cafe_cart')
      if(raw) setCart(JSON.parse(raw))
    } catch(e){}
  },[])

  useEffect(()=>{
    try { localStorage.setItem('cafe_cart', JSON.stringify(cart)) } catch(e){}
  },[cart])

  function addToCart(item){
    setCart(prev=>{
      const idx = prev.findIndex(p=>p.id===item.id)
      if(idx>-1){
        const copy = [...prev]; copy[idx].qty += 1; return copy
      }
      return [...prev, {...item, qty:1}]
    })
  }
  function removeFromCart(id){
    setCart(prev=>prev.filter(p=>p.id!==id))
  }
  function updateQty(id, qty){
    setCart(prev=>prev.map(p=>p.id===id?{...p, qty}:p))
  }
  function clearCart(){ setCart([]) }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    cartCount: cart.reduce((s,i)=>s+i.qty,0),
    cartTotal: cart.reduce((s,i)=>s+i.price*i.qty,0)
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = ()=> useContext(CartContext)
