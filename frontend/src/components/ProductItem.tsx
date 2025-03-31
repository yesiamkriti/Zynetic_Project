import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Product } from '../types/Product'
import Rating from './Rating'
import { useContext } from 'react'
import { Store } from '../Store'
import { CartItem } from '../types/Cart'
import { convertProductToCart } from '../utils'


function ProductItem ({product}:{product:Product}) {
    const {state, dispatch} = useContext(Store)
    const {
        cart: { cartItems },
    }=state

    const addtoCartHandler = (item: CartItem)=>{
        const existItem = cartItems.find((x)=>x._id === product._id)
        const quantity = existItem? existItem.quantity+1:1
        if(product.countInStock<quantity){
            alert('Sorry! product is out of Stock');
            return;
        }dispatch({
            type: "CART_ADD_ITEM",
            payload: {...item,quantity},
        })
    }
  return (
    <Card >
        <Link to={`/products/${product.slug}`}>
            <img src={product.image} className="card-img-top" alt={product.name}/>
        </Link>
        <Card.Body>
            <Link to={`/products/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            <Card.Text>&#8377;{product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            {
                product.countInStock ===0 ?(
                    <Button variant="danger" disabled>Out of Stock</Button>
                ):(
                    <Button onClick={()=>addtoCartHandler(convertProductToCart(product))} variant="primary">Add to Cart</Button>
                )
            }
        </Card.Body>
    </Card>
  )
}
export default ProductItem;
