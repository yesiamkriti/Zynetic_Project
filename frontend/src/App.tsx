import './App.css'
import { sampleProducts } from './data'

function App() {

  return (
    <>
     <div>
      <header>Zynetics EV </header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
          <li key={product.slug}>
            <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
          </li>
        ))}
        </ul>
        
      </main>
      <footer>
        All right are reserved. Zynetics EV 2023
      </footer>
     </div>
    </>
  )
}

export default App
