// ** React Imports
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import classnames from 'classnames'
import { X, Star } from 'react-feather'
import { Card, CardBody, CardText, Button, Badge, InputGroup, InputGroupAddon, Input, InputGroupText, Label } from 'reactstrap'

// ** Custom Components
import NumberInput from '@components/number-input'

const Cart = props => {
  // ** Props
  const { products, stepper, deleteCartItem, addToWishlist, deleteWishlistItem, getCartItems, setPaymentAmount} = props

  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartItems())
  }, [])
  const store = useSelector(state => state.ecommerce)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(store.cart.reduce((sum, item) => sum + (item.itemPrice * item.qty), 0))
  }, [store.cart])
  

  const handleIncrement = (price) => {
    setTotal(total + price)  
  } 
  const handleDecrement = (price) => {
   setTotal(total - price)
 } 

  // ** Render cart items
  const renderCart = () => {
    return products.map(item => {
      return (
        <Card key={item.itemId} className='ecommerce-card'>
          <div className='item-img'>
            <Link to={`/apps/ecommerce/product/${item.slug}`}>
              <img className='img-fluid' src={require(`@src/assets/images/items/${item.itemId}.jpg`).default} alt={item.itemName} />
            </Link>
          </div>
          <CardBody>
            <div className='item-name'>
              <h6 className='mb-0'>
                <Link to={`/apps/ecommerce/product/${item.slug}`}>{item.itemName}</Link>
              </h6>
              <div className='item-rating'>
                <ul className='unstyled-list list-inline'>
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className='ratings-list-item mr-25'>
                        <Star
                          className={classnames({
                            'filled-star': index + 1 <= 4,
                            'unfilled-star': index + 1 > 4
                          })}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <span className='text-success mb-1'>In Stock</span>
            <div className='item-quantity'>
              <span className='quantity-title mr-50'>Qty</span>
              <NumberInput value={item.qty} min={1} max={10} size='sm' style={{ width: '7rem', height: '2.15rem' }} price = {item.itemPrice}
                        onIncrement = {handleIncrement}
                        onDecrement = {handleDecrement} id = {item.itemId} />
            </div>
          </CardBody>
          <div className='item-options text-center'>
            <div className='item-wrapper'>
              <div className='item-cost'>
                <h4 className='item-price'>₹{item.itemPrice * item.qty}</h4>
                  <CardText className='shipping'>
                    <Badge color='light-success' pill>
                      Free delivery
                    </Badge>
                  </CardText>
              </div>
            </div>
            <Button className='mt-1 remove-wishlist' color='light' onClick={() => dispatch(deleteCartItem(item.itemId))}>
              <X size={14} className='mr-25' />
              <span>Remove</span>
            </Button>
          </div>
        </Card>
      )
    })
  }

const coupons = ['TRYNEW', 'LUCKY100', 'GET100', 'WELCOMEBACK', 'YUMAZING', 'GOBIG']
const [coupon, setCoupon] = useState('')
const [sucess, setSucess] = useState(false)
const [failure, setFailure] = useState(false)

useEffect(() => {
  setSucess(false)
  setFailure(false)
}, [coupon])
  
const validate = () => {
   const result = coupons.filter(c => c === coupon)
  result[0] === undefined ? setFailure(true) : setSucess(true)
  }

  return (
    <div className='list-view product-checkout'>
      <div className='checkout-items'>{products.length ? renderCart() : <h4>Your cart is empty</h4>}</div>
      <div className='checkout-options'>
        <Card>
          <CardBody>
            <label className='section-label mb-1'>Options</label><br/>
            {sucess && <b><span style = {{color:'green'}}>Coupon Applied!</span></b>}
            {failure && <b><span style = {{color:'red'}}>Invalid Coupon!</span></b>}
            <InputGroup className='input-group-merge coupons'>
            <Input placeholder='Coupons' onChange = {e => setCoupon(e.target.value)}  />
              <InputGroupAddon addonType='append'>
                <InputGroupText className='text-primary' onClick = {validate}>Apply</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <hr />
            <div className='price-details'>
              <h6 className='price-title'>Price Details</h6>
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title'>Total MRP</div>
                  <div className='detail-amt'>₹{total}</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Estimated Tax</div>
                  <div className='detail-amt'>₹30</div>
                </li>
                {sucess && <li className='price-detail'>
                  <div className='detail-title'>Coupons</div>
                  <div className='detail-amt discount-amt text-success'>-₹{100}</div>
                </li>}
                {/* <li className='price-detail'>
                  <div className='detail-title'>EMI Eligibility</div>
                  <a href='/' className='detail-amt text-primary' onClick={e => e.preventDefault()}>
                    Details
                  </a>
                </li> */}
                <li className='price-detail'>
                  <div className='detail-title'>Delivery Charges</div>
                  <div className='detail-amt discount-amt text-success'>₹35</div>
                </li>
              </ul>
              <Label for='instruction' className='form-label font-weight-bold'>
                Add Instructions:
              </Label>
              <Input type='textarea' rows='2' id='note'  />
              <hr />
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title detail-total'>Total</div>
                  <div className='detail-amt font-weight-bolder'>₹ {total + 30 + 35 - (sucess ? 100 : 0) }</div>
                </li>
              </ul>
              <Button.Ripple
                color='primary'
                classnames='btn-next place-order'
                block
                disabled={!products.length}
                onClick={() => { 
                  return (
                          stepper.next(), 
                          setPaymentAmount(total)) 
                        }}
              >
                Place Order
              </Button.Ripple>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Cart
