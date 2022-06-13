
import ProductCards from './ProductCards'
import ProductsHeader from './ProductsHeader'

// ** Third Party Components
import classnames from 'classnames'

const ProductsPage = props => {
  // ** Props
  const {
    activeView,
    store,
    sidebarOpen,
    dispatch,
    setSidebarOpen
  } = props

  return (
    <div className='content-detached'>
      <div className='content-body'>
        <ProductsHeader
          store={store}
        />
        <div className={classnames('body-content-overlay', {
            show: sidebarOpen
          })}
          onClick={() => setSidebarOpen(false)}
        ></div>
        {store.orders.length ? (
        
            <ProductCards
              store={store}
              dispatch={dispatch}
              activeView={activeView}
              products={store.orders}
            />
          
        ) : (
          <div className='d-flex justify-content-center mt-2'>
           
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
