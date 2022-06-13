// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

// ** Shop Components
import Sidebar from './Sidebar'
import Products from './Products'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  getItems,
  getCartItems,
  addToWishlist,
  deleteCartItem,
  deleteWishlistItem
} from '../store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const Items = () => {
  // ** States
  const [activeView, setActiveView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)

  const {id} = useParams()
  const {catid} = useParams()
  const restaurants = useSelector(state => state.ecommerce.restaurants)
  const restaurant = restaurants.filter(restaurant => restaurant.restId === parseInt(id))
  /*console.log(restaurants)
  console.log(restaurant)
  console.log(id)
  console.log(catid)*/

  // ** Get products
  useEffect(() => {
    dispatch(
      getItems({
        cid:catid,
        i:id,
        q: '',
        sortBy: 'featured',
        perPage: 9,
        page: 1
      })
    )
  }, [dispatch])

  const [price, setPrice] = useState(0)

  const handleChange = (event) => {
  console.log(event.target.value)
  setPrice(event.target.value)
  }

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle={restaurant[0].restName} breadCrumbParent='Order Food Online'  breadCrumbParent2='Restuarants' breadCrumbActive='Menu'/>
      <Products
        store={store}
        dispatch={dispatch}
        addToCart={addToCart}
        activeView={activeView}
        getProducts={getItems}
        sidebarOpen={sidebarOpen}
        getCartItems={getCartItems}
        setActiveView={setActiveView}
        addToWishlist={addToWishlist}
        setSidebarOpen={setSidebarOpen}
        deleteCartItem={deleteCartItem}
        deleteWishlistItem={deleteWishlistItem}
        price = {price}
      />
     <Sidebar sidebarOpen={sidebarOpen}  handleChange = {handleChange} />
    </Fragment>
  )
}
export default Items
