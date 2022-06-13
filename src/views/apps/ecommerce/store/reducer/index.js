import { startOfDay } from "@fullcalendar/core"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  state: (state = {}) => state
})


const initialState = {
  orders: [],
  products: [],
  restaurants: [],
  items: [],
  totalItems: 0,
  totalRestaurants: 0,
  wishlist: [],
  cart: [],
  productDetail: {},
  params: {},
  totalProducts: 0,
  users: []
}

const ecommerceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.data, params: action.params, totalProducts: action.data.length }
    case 'GET_RESTAURANTS':
      return { ...state, restaurants: action.data, params: action.params, totalRestaurants: action.data.length }
    case 'GET_ITEMS':
      return { ...state, items: action.data, params: action.params, totalItems: action.data.length }
    case 'GET_WISHLIST':
      return { ...state, wishlist: action.data.products }
    case 'DELETE_WISHLIST_ITEM':
      return { ...state }
    case 'GET_CART':
      return { ...state, cart: action.data.products }
    case 'DELETE_CART_ITEM':
      return { ...state, items: state.items.map(item => { return item.itemId === action.productId ? { ...item, isInCart:false} : item })}
    case 'ADD_TO_WISHLIST':
      return { ...state }
    case 'GET_PERSONALINFO':
       return {  ...state, users: action.data.users}
    case 'GET_ORDERS':
       return { ...state, orders: action.data, params: action.params, totalOrders: action.data.length }  
    case 'ADD_TO_CART':
      return { ...state, items: state.items.map(item => { return item.itemId === action.productId ? { ...item, isInCart:true} : item })}
    case 'GET_PRODUCT':
      return { ...state, productDetail: action.data.product }
    case 'ADJUST_QUANTITY':
      return {...state,
        cart: state.cart.map(item => { 
         return (item.itemId === action.payload.pid ? {...item, qty: action.payload.qty} : item)
      })}
    default:
      return state
  }
}

export default ecommerceReducer
