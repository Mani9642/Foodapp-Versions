// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'
import { useParams } from "react-router-dom"

// ** Third Party Components
import wNumb from 'wnumb'
import classnames from 'classnames'
import { Star } from 'react-feather'
import Nouislider from 'nouislider-react'
import { Card, CardBody, Row, Col, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/noui-slider/noui-slider.scss'
import { event } from 'jquery'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'

const Sidebar = props => {
  // ** Props
  const { sidebarOpen, handleChange } = props
  const dispatch = useDispatch()
  
  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()

  const store = useSelector(state => state.ecommerce)
  const [filterPrice, setFilterPrice] = useState(({
   isAgree : "false"
   
  }))
  const params = {
    q: '',
    sortBy: 'featured',
    perPage: 9,
    page: 1
  }
 
  return (
    <div className='sidebar-detached sidebar-left'>
      <div className='sidebar'>
        <div
          className={classnames('sidebar-shop', {
            show: sidebarOpen
          })}
        >
          <Row>
            <Col sm='12'>
              <h6 className='filter-heading d-none d-lg-block'>Filters</h6>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <div className='multi-range-price'>
                <h6 className='filter-title mt-0'>Multi Range</h6>
                <ul className='list-unstyled price-range'>
                <li>
                    <CustomInput id='all' name='price-range-radio' type='radio' label='All '  defaultChecked  value = "" onClick={handleChange} />
                  </li>
                  <li>
                    <CustomInput id='10-dollars-below' name='price-range-radio' type='radio' label='Below ₹500' value ="500" onClick={handleChange}/>
                  </li>
                  <li>
                    <CustomInput id='10-100-dollars' name='price-range-radio' type='radio' label='Below ₹300'   value ="300" onChange={handleChange} />
                  </li>
                  <li>
                    <CustomInput id='100-500-dollars' name='price-range-radio' type='radio' label='Below ₹100'   value ="100" onChange={handleChange} />
                  </li>
                </ul>
              </div>
              {/*<div id='product-categories'>
                <h6 className='filter-title'>Categories</h6>
                <ul className='list-unstyled categories-list'>
                <li>
                    <CustomInput id='' name='All categories' type='radio' label='All '  defaultChecked  value = "" />
                  </li>
                  <li>
                    <CustomInput id='starters' name='All categories' type='radio' label='starters' value = "1"/>
                  </li>
                  <li>
                    <CustomInput id='maincourse' name='All categories' type='radio' label='maincourse'   value = "3"/>
                  </li>
                  <li>
                    <CustomInput id='biryani' name='All categories' type='radio' label='biryani'   value = "4"/>
                  </li>
                  <li>
                    <CustomInput id='ice-creams' name='All categories' type='radio' label='ice-creams'   value = "6"/>
                  </li>
                </ul>
              </div>              
              <div id='clear-filters'>
                <Button.Ripple color='primary' block>
                  Clear All Filters
                </Button.Ripple>
        </div>*/}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
