// ** React Imports
import { Fragment, useState, useEffect } from 'react'


// ** Shop Components
import Sidebar from './Sidebar'
import Products from './Products'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  getRestaurants,
  getCartItems,
  addToWishlist,
  deleteCartItem,
  deleteWishlistItem
} from '../store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const Restaurants = () => {
  // ** States
  const [activeView, setActiveView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)
  

  // ** Get products
  useEffect(() => {
    dispatch(
      getRestaurants({
        q: '',
        sortBy: 'featured',
        perPage: 9,
        page: 1
      })
    )
  }, [dispatch])

  const [rating, setRating] = useState(0)

  const handleChange = (event) => {
  setRating(event.target.value)
  }
  
  const [location, setLocation] = useState(0)
  const handleValueChange = (event) => {
    console.log(event.target.value)
    setLocation(event.target.value)
  }

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Restaurants' breadCrumbParent='Order Food Online' breadCrumbActive='Restaurants' />
      <Products
        store={store}
        dispatch={dispatch}
        addToCart={addToCart}
        activeView={activeView}
        getProducts={getRestaurants}
        sidebarOpen={sidebarOpen}
        getCartItems={getCartItems}
        setActiveView={setActiveView}
        addToWishlist={addToWishlist}
        setSidebarOpen={setSidebarOpen}
        deleteCartItem={deleteCartItem}
        deleteWishlistItem={deleteWishlistItem}
        rating = {rating}
        location = {location}
      />
    <Sidebar sidebarOpen={sidebarOpen} handleChange = {handleChange} handleValueChange = {handleValueChange}/>
    </Fragment>
  )
}
export default Restaurants
