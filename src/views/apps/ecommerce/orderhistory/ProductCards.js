// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, Heart } from 'react-feather'
import { Card, CardBody, CardText, Button, Badge } from 'reactstrap'
import { useSelector } from 'react-redux'


const ProductCards = props => {
  // ** Props
  let {products} = props
  const {
    store,
    activeView,
    addToCart,
    dispatch,
    getProducts,
    getCartItems
  } = props
  const info = useSelector(state => state)
 const userId = info.auth.userData.userId

products = products.filter(p => p.order.userId === userId)
 console.log(userId)
  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id))
    }
    dispatch(getCartItems())
    dispatch(getProducts(store.params))
  }

  // ** Renders products
  const renderProducts = () => {
    if (products.length) {
      return products.map(item => {
        const CartBtnTag = item.isInCart ? Link : 'button'

        return (
          <Card className='ecommerce-card' key={item.orderId}>
            <div className='item-img text-center mx-auto'>
              {/* <Link to={`/apps/ecommerce/product-detail/${item.slug}`}> */}
                <img className='img-fluid card-img-top' src={require(`@src/assets/images/orderhistory/${item.orderId}.jpg`).default} alt={item.orderId} />
              {/* </Link> */}
            </div>
            <CardBody>
              {/* <div className='item-wrapper'> */}
                {/* <div className='item-rating'>
                  <ul className='unstyled-list list-inline'>
                    {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className='ratings-list-item mr-25'>
                          <Star
                            className={classnames({
                              'filled-star': index + 1 <= item.rating,
                              'unfilled-star': index + 1 > item.rating
                            })}
                          /> 
                        </li>
                      )
                    })}*/}
             <strong>Order Id :  </strong>
             <CardText  className='item-description'>{item.orderId}</CardText>
            
             <strong>Amount : </strong>
              <CardText className='item-description'>₹{item.quantity * item.item.itemPrice}</CardText>
              
             <strong>Item Name :</strong>
              <CardText className='item-description'>{item.item.itemName}</CardText>
              
             <strong>Quantity :</strong>
              <CardText className='item-description'>{item.quantity}</CardText>
              
              {/* <b><CardText className='item-description'>contact:&nbsp;+91-{item.restPhNo}</CardText></b> */}
            </CardBody>
            <div className='item-options text-center'>
              <div className='item-wrapper'>
                <div className='item-cost'>
                  <h4 className='item-price'>${item.amount}</h4>
                  {item.hasFreeShipping ? (
                    <CardText className='shipping'>
                      <Badge color='light-success'>Free Shipping</Badge>
                    </CardText>
                  ) : null}
                </div>
              </div>
              {/* <Button
                color='primary'
                className='btn-cart move-cart'
                tag = {Link} to={`/apps/ecommerce/items/${item.restId}`}
              > 
                <ShoppingCart className='mr-50' size={14} />
                <span>click here</span>
              </Button> */}
            </div>
          </Card>
        )
      })
    }
  }

  return (
    <div
      className={classnames({
        'grid-view': activeView === 'grid',
        'list-view': activeView === 'list'
      })}
    >
      {renderProducts()}
    </div>
  )
}

export default ProductCards
