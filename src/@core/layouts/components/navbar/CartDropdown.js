// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
// ** Custom Components
import NumberInput from '@components/number-input'

// ** Third Party Components
import { ShoppingCart, X } from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Media, Badge, Button } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems, deleteCartItem} from '@src/views/apps/ecommerce/store/actions'

const CartDropdown = () => {
  // ** State
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  // ** Function to toggle Dropdown
  const toggle = () => setDropdownOpen(prevState => !prevState)

  // ** Function to call on Dropdown Item Click
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

  // ** Loops through Cart Array to return Cart Items
  const renderCartItems = () => {
    if (store.cart.length) {

      return (
        <Fragment>
          <PerfectScrollbar
            options={{
              wheelPropagation: false
            }}
            className='scrollable-container media-list'
          >
            {store.cart.map(item => {

              return (
                <Media key={item.itemId} className='align-items-center'>
                  <img className='d-block rounded mr-1' src={require(`@src/assets/images/items/${item.itemId}.jpg`).default} alt={item.itemName} width='62' />
                  <Media body>
                    <X size={14} className='cart-item-remove' onClick={() => { 
                      dispatch(deleteCartItem(item.itemId))
                    }}/>
                    <div className='media-heading'>
                      <h6 className='cart-item-title'>
                        <Link
                          className='text-body'
                          to={`/apps/ecommerce/product/${item.slug}`}
                          onClick={() => handleDropdownItemClick(item.itemId)}
                        >
                          {item.itemName}
                        </Link>
                      </h6>
                      {/*<small className='cart-item-by'>by {item.brand}</small>*/}
                    </div>
                    <div className='cart-item-qty'>
                    <NumberInput
                        min={1}
                        max={10}
                        size='sm'
                        className='p-0'
                        value={item.qty}
                        id = {item.itemId}
                        style={{ width: '7rem', height: '2.15rem' }}
                        price = {item.itemPrice}
                        onIncrement = {handleIncrement}
                        onDecrement = {handleDecrement}
                      />
                    </div>
                    <h5 className='cart-item-price'>₹{item.itemPrice * item.qty}</h5>
                  </Media>
                </Media>
              )
            })}
          </PerfectScrollbar>
          <li className='dropdown-menu-footer'>
            <div className='d-flex justify-content-between mb-1'>
              <h6 className='font-weight-bolder mb-0'>Total:</h6>
              <h6 className='text-primary font-weight-bolder mb-0'>₹{Number(total.toFixed(2))}</h6>
            </div>
            <Button.Ripple tag={Link} to='/apps/ecommerce/userLogin' color='primary' block onClick={toggle}>
              Checkout
            </Button.Ripple>
          </li>
        </Fragment>
      )
    } else {
      return <p className='m-0 p-1 text-center'>Your cart is empty</p>
    }
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} tag='li' className='dropdown-cart nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link position-relative'>
        <ShoppingCart className='ficon' />
        {store.cart.length > 0 ? (
          <Badge pill color='primary' className='badge-up'>
            {store.cart.length}
          </Badge>
        ) : null}
      </DropdownToggle>
      <DropdownMenu right tag='ul' className='dropdown-menu-media dropdown-cart mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem tag='div' className='d-flex' header>
            <h4 className='notification-title mb-0 mr-auto'>My Cart</h4>
            <Badge color='light-primary' pill>
              {store.cart.length || 0} Items
            </Badge>
          </DropdownItem>
        </li>
       {renderCartItems()} 
      </DropdownMenu>
    </Dropdown>
  )
}

export default CartDropdown
