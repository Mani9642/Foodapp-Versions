import axios from 'axios'

import useJwt from '../../../../../auth/jwt/useJwt'
// ** GET Products
import GlobalVariable from "../../../../../path/global"
const baseApiUrl = GlobalVariable.BASE_API_URL

export const getProducts = params => {
  return dispatch => {
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${useJwt.getToken()}`
    const authAxios = axios.create({
      baseURL: baseApiUrl
    })
    const searchWord = params.q
    console.log(searchWord)
    if (searchWord === '') {
      return authAxios.get('categories/list', { params}).then(res => {
        console.log(res)
        dispatch({ type: 'GET_PRODUCTS', data: res.data, params })
      }) 
    
    } else {
      return authAxios.get(`categories/search/${searchWord}`, { params}).then(res => {
        console.log(res)
        dispatch({ type: 'GET_PRODUCTS', data: res.data, params })
      })
    }
  }
}

export const getRestaurants = params => {
  return dispatch => {
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${useJwt.getToken()}`
    const authAxios = axios.create({
      baseURL: baseApiUrl
    })
    const searchWord = params.q
    console.log(searchWord)
    if (searchWord === '') {
      return authAxios.get('restaurants/list', { params}).then(res => {
        console.log(res)
        dispatch({ type: 'GET_RESTAURANTS', data: res.data, params })
      }) 
    
    } else {
      return authAxios.get(`restaurants/search/${searchWord}`, { params}).then(res => {
        console.log(res)
        dispatch({ type: 'GET_RESTAURANTS', data: res.data, params })
      })
    }
  }
}

export const getItems = params => {
  return dispatch => {
    const id = params.i
    const catid = params.cid
     axios.defaults.headers.common['Authorization'] = `Bearer ${useJwt.getToken()}`
    const authAxios = axios.create({
      baseURL: baseApiUrl
    })
    const searchWord = params.q
    console.log(searchWord)
    if (searchWord === '') {
      if (id) {
      return authAxios.get(`items/list/${id}`, { params}).then(res => {
        //console.log(res)
       const result = res.data.map(item => { return { ...item, qty:1, isInCart:false} })
        dispatch({ type: 'GET_ITEMS', data: result, params })
      }) 
    } else {
      return authAxios.get(`items/listc/${catid}`, { params}).then(res => {
        //console.log(res)
        dispatch({ type: 'GET_ITEMS', data: res.data, params })
      }) 
    }
    
    } else {
      return authAxios.get(`items/search/${searchWord}`, { params}).then(res => {
        console.log(res)
        dispatch({ type: 'GET_ITEMS', data: res.data, params })
      })
    }
  }
}

// ** Add Item to Cart
export const addToCart = id => {
  return (dispatch, getState) => {
    return axios.post('/apps/ecommerce/cart', { productId: id }).then(res => {
      dispatch({ type: 'ADD_TO_CART', productId: id})
      //dispatch(getItems(getState().ecommerce.params))
    })
  }
}

// ** GET Wishlist Items
export const getWishlistItems = () => {
  return dispatch => {
    return axios.get('/apps/ecommerce/wishlist').then(res => {
      dispatch({ type: 'GET_WISHLIST', data: res.data })
    })
  }
}

// ** GET USER INFO
export const getPersonalInfo = () => {
  return dispatch => {
    return axios.get('/apps/ecommerce/profile').then(per => {
      dispatch({type: 'GET_PERSONALINFO', data: per.data })
    })
  }
}

// ** DELETE Wishlist Item
export const deleteWishlistItem = id => {
  return dispatch => {
    return axios.delete(`/apps/ecommerce/wishlist/${id}`).then(res => {
      dispatch({ type: 'DELETE_WISHLIST_ITEM', data: res.data })
      dispatch(getWishlistItems())
    })
  }
}

// ** GET Cart Items
export const getCartItems = () => {
  return dispatch => {
    return axios.get('/apps/ecommerce/cart').then(res => {
      dispatch({ type: 'GET_CART', data: res.data })
    })
  }
}

// ** GET Single Product
export const getProduct = slug => {
  return dispatch => {
    return axios.get(`/apps/ecommerce/products/${slug}`).then(res => {
      dispatch({ type: 'GET_PRODUCT', data: res.data })
    })
  }
}

// ** Add Item to Wishlist
export const addToWishlist = id => {
  return dispatch => {
    return axios.post('/apps/ecommerce/wishlist', { productId: id }).then(() => {
      dispatch({ type: 'ADD_TO_WISHLIST' })
    })
  }
}

// ** DELETE Cart Items
export const deleteCartItem = id => {
  return dispatch => {
    return axios.delete(`/apps/ecommerce/cart/${id}`).then(res => {
      dispatch({ type: 'DELETE_CART_ITEM', productId: id })
      dispatch(getCartItems())
    })
  }
}

export const adjustQuantity = (id, count) => {
  return {
    type:'ADJUST_QUANTITY',
    payload: {
      pid: id,
      qty:count
    }
  }
}