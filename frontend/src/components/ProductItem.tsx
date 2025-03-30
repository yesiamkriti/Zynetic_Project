import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Product } from '../types/Product'
import Rating from './Rating'

function ProductItem ({product}:{product:Product}) {
  return (
    <Card >
        <Link to={`/product/ ${product.slug}`}>
            <img src={product.image} className="card-img-top" alt={product.name}/>
        </Link>
        <Card.Body>
            <Link to={`/product/ ${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            <Card.Text>&#8377;{product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            {
                product.countInStock ===0 ?(
                    <Button variant="danger" disabled>Out of Stock</Button>
                ):(
                    <Button variant="primary">Add to Cart</Button>
                )
            }
        </Card.Body>
    </Card>
  )
}
export default ProductItem;
