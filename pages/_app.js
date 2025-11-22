import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../context/CartContext'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <main className="page">
        <Component {...pageProps} />
      </main>
      <Footer />
    </CartProvider>
  )
}

export default MyApp
