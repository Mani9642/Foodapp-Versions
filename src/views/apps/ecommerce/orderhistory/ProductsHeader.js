
import {
  Row,
  Col
} from 'reactstrap'

const ProductsHeader = props => {
  // ** Props
  const {  store } = props

  return (
    <div className='ecommerce-header'>
      <Row>
        <Col sm='12'>         
        <h5 className='mb-0'>My Orders</h5>
         <br></br>
              <span className='search-results'>{store.totalOrders} Results Found</span>
            <div className='view-options d-flex'> 
            </div>       
        </Col>
      </Row>
    </div>
  )
}

export default ProductsHeader
