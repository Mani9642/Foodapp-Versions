// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, Heart } from 'react-feather'
import { Card, CardBody, CardText, Button, Badge } from 'reactstrap'

const ProductCards = props => {
  // ** Props
  const {
    store,
    activeView,
    addToCart,
    dispatch,
    getProducts,
    getCartItems,
    addToWishlist,
    deleteWishlistItem,
    rating,
    location
  } = props

  let {products} = props
  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id))
    }
    dispatch(getCartItems())
    dispatch(getProducts(store.params))
  }

  // ** Handle Wishlist item toggle
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id))
    } else {
      dispatch(addToWishlist(id))
    }
    dispatch(getProducts(store.params))
  }

  // ** Renders products
  const renderProducts = () => {
    if (rating) {
      //console.log(rating)
      products = products.filter(restaurant => restaurant.rating === parseInt(rating))
    }
    console.log(location)
    if (location) {
      products = products.filter(item => item.restAddress === location)
    }

    if (products.length) {
      return products.map(item => {
        const CartBtnTag = item.isInCart ? Link : 'button'

        return (
          <Card className='ecommerce-card' key={item.restId}>
            <div className='item-img text-center mx-auto'>
              <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>
                <img className='img-fluid card-img-top' src={require(`@src/assets/images/restaurants/${item.restId}.jpg`).default} alt={item.restName} />
              </Link>
            </div>
            <CardBody>
              <div className='item-wrapper'>
                <div className='item-rating'>
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
                    })}
                  </ul>
                </div>
              </div>
              <h6 className='item-name'>
                <Link className='text-body' to={`/apps/ecommerce/product-detail/${item.slug}`}>
                  {item.restName}
                </Link>
                <CardText tag='span' className='item-company'>
                  By{' '}
                  <a className='company-name' href='/' onClick={e => e.preventDefault()}>
                    {item.brand}
                  </a>
                </CardText>
              </h6>
              <CardText className='item-description'>{item.restAddress}</CardText>
              <b><CardText className='item-description'>contact:&nbsp;+91-{item.restPhNo}</CardText></b>
            </CardBody>
            <div className='item-options text-center'>
              <div className='item-wrapper'>
                <div className='item-cost'>
                  <h4 className='item-price'>${item.price}</h4>
                  {item.hasFreeShipping ? (
                    <CardText className='shipping'>
                      <Badge color='light-success'>Free Shipping</Badge>
                    </CardText>
                  ) : null}
                </div>
              </div>
              <Button
                color='primary'
                tag = {Link}
                className='btn-cart move-cart' to={`/apps/ecommerce/items/${item.restId}`}
              >
                <ShoppingCart className='mr-50' size={14} />
                <span>click here</span>
              </Button>
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
