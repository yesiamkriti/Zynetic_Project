import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'
export default function 
() {
  return (
    <div>
         <h1 className="text-center mb-4">Welcome to Zynetics EV</h1>
            <div className="row">
              {sampleProducts.map((product) => (
                <div key={product.slug} className="col-md-4 mb-4">
                  <div className="card hover-shadow card-custom">
                    <Link to={'/product/'+product.slug}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    </Link>
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <strong>Price: &#8377;{product.price}</strong>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Add to Cart 
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}
