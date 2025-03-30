import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { ApiError } from '../types/ApiError'
import {Product} from '../types/Product'
import { getError } from '../utils'
import LoadingBox from '.././components/LoadingBox'
import MessageBox from '.././components/MessageBox'

type State = {
  products: Product[]
  loading: boolean
  error: string
}
type Action =
  | { type: 'FETCH_REQUEST' }
  | {
      type: 'FETCH_SUCCESS'
      payload: Product[]
    }
  | { type: 'FETCH_FAIL'; payload: string }
const initialState: State = {
  products: [],
  loading: true,
  error: '',
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}


export default function Homepage () {

  const [{ loading, error, products }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
      }
    }
    fetchData()
  }, [])

  return (loading ? (
      <LoadingBox />
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
    <div>
      <h1 className="text-center mb-4">Welcome to Zynetics EV</h1>
      <Row>
        {products.map((product) => (
          <div key={product.slug} className="col-md-4 mb-4">
            <div className="card hover-shadow card-custom">
              <Link to={'/product/' + product.slug}>
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
      </Row>
    </div>
    )
  )
}
