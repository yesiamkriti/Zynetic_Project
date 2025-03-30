import { Row } from 'react-bootstrap'
import LoadingBox from '.././components/LoadingBox'
import MessageBox from '.././components/MessageBox'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../hooks/productHook'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'

export default function Homepage() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">
      {getError(error as unknown as ApiError)}
    </MessageBox>
  ) : (
    <div>
      <h1 className="text-center mb-4">Welcome to Zynetics EV</h1>
      <Row>
        {products!.map((product) => (
          <div key={product.slug} className="col-md-4 mb-4">
            <ProductItem product={product}></ProductItem>
          </div>
        ))}
      </Row>
    </div>
  )
}
