import { useParams } from 'react-router-dom'  
import { useGetProductDetailsBySlugQuery } from '../hooks/productHook'
import { Card, Col, Row, ListGroup, Button, Badge } from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import Rating from '../components/Rating'
function ProductPage() {
  const params = useParams()
const { slug } = params

const {
 data: product,
 isLoading,
 error,
} = useGetProductDetailsBySlugQuery(slug!)

return isLoading ? (
 <LoadingBox />
) : error   ? (
 <MessageBox variant="danger">{getError(error as unknown as ApiError)}</MessageBox>
) : !product ? (
 <MessageBox variant="danger">Product Not Found</MessageBox>
): (
 <div>
   <Row>
     <Col md={6}>
       <img
         className="large"
         src={product.image}
         alt={product.name}
       ></img>
     </Col>
     <Col md={3}>
       <ListGroup variant="flush">
         <ListGroup.Item>
           <h1>{product.name}</h1>
         </ListGroup.Item>
         <ListGroup.Item>
           <Rating
             rating={product.rating}
             numReviews={product.numReviews}
           ></Rating>
         </ListGroup.Item>
         <ListGroup.Item>Price : &#8377;{product.price}</ListGroup.Item>
         <ListGroup.Item>
           Description:
           <p>{product.description}</p>
         </ListGroup.Item>
       </ListGroup>
     </Col>
     <Col md={3}>
       <Card>
         <Card.Body>
           <ListGroup variant="flush">
             <ListGroup.Item>
               <Row>
                 <Col>Price:</Col>
                 <Col>&#8377;{product.price}</Col>
               </Row>
             </ListGroup.Item>
             <ListGroup.Item>
               <Row>
                 <Col>Status:</Col>
                 <Col>
                   {product.countInStock > 0 ? (
                     <Badge bg="success">In Stock</Badge>
                   ) : (
                     <Badge bg="danger">Unavailable</Badge>
                   )}
                 </Col>
               </Row>
             </ListGroup.Item>

             {product.countInStock > 0 && (
               <ListGroup.Item>
                 <div className="d-grid">
                   <Button variant="primary">
                     Add to Cart
                   </Button>
                 </div>
               </ListGroup.Item>
             )}
           </ListGroup>
         </Card.Body>
       </Card>
     </Col>
   </Row>
   </div>

)
}
export default ProductPage
