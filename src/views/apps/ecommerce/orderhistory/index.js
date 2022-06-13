// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Shop Components
import Products from './Products'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  getOrders,
  getCartItems
} from '../store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const OrderHistory = () => {
  // ** States
  const [activeView, setActiveView] = useState('grid')
 
  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)
  

  // ** Get products
  useEffect(() => {
    dispatch(
      getOrders({
        q: '',
        // sortBy: 'featured',
        // perPage: 9,
        page: 1
      })
    )
  }, [dispatch])

  return (
    <Fragment>
       <Products
        store={store}
        dispatch={dispatch}
        addToCart={addToCart}
        activeView={activeView}
        getProducts={getOrders}
        getCartItems={getCartItems}
        setActiveView={setActiveView}
         />
    </Fragment>
  )
}
export default OrderHistory 

