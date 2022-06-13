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
  const { sidebarOpen, handleChange, handleValueChange } = props
  const dispatch = useDispatch()

  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()

  const store = useSelector(state => state.ecommerce)
  //console.log(store)
  const items = store.items
  //console.log(items)

  const {id} = useParams()
  //console.log(id)
  const {catid} = useParams()
  //console.log(catid)
  

  // ** Array of categories

  // ** Array of brands
  
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
            <div className='multi-range-locations'>
                <h6 className='filter-title mt-0'>Multi Range locations</h6>
                <ul className='list-unstyled locations-range'>
                <li>
                    <CustomInput id='all' name='locations-range-radio' type='radio' label='All '  defaultChecked  value = "" onClick={handleValueChange} /><br/>
                  </li>
                  {/* <li>
                    <CustomInput id='Hyderabad' name='locations-range-radio' type='radio' label='Hyderabad' value ="Hyderabad" onClick={handleValueChange}/><br/>
                  </li> */}
                  <li>
                    <CustomInput id='Kukatpally' name='locations-range-radio' type='radio' label='Kukatpally'   value ="Kukatpally" onChange={handleValueChange} /><br/>
                  </li>
                  <li>
                    <CustomInput id='Banjarahills' name='locations-range-radio' type='radio' label='Banjarahills'   value ="Banjarahills" onChange={handleValueChange} /><br/>
                  </li>
                  <li>
                    <CustomInput id='Gachibowli' name='locations-range-radio' type='radio' label='Gachibowli'   value ="Gachibowli" onChange={handleValueChange} /><br/>
                  </li>
                  <li>
                    <CustomInput id='KPHB' name='locations-range-radio' type='radio' label='KPHB'   value ="KPHB" onChange={handleValueChange} /><br/>
                  </li>
                  <li>
                    <CustomInput id='LB Nagar' name='locations-range-radio' type='radio' label='LB Nagar'   value ="LB Nagar" onChange={handleValueChange} /><br/>
                  </li>
                </ul>
              </div>
              
              {/* <div id='clear-filters'>
                <Button.Ripple color='primary' block>
                  Clear All Filters
                </Button.Ripple>
              </div> */}

              <div className='multi-range-price'>
                <h6 className='filter-title mt-0'>Ratings</h6>
                <ul className='list-unstyled price-range'>
                <li>
                  <CustomInput id='All' name='rating-range-radio' type='radio' label='All' defaultChecked value = '' onClick={handleChange}/>
                </li> 
                <li>
                  <CustomInput id='5 star' name='rating-range-radio' type='radio' label='★★★★★' value = '5' onClick={handleChange}/>
                </li>
                <li>
                  <CustomInput id='4 star' name='rating-range-radio' type='radio' label='★★★★✰' value = '4' onClick={handleChange}/>
                </li>
                <li>
                  <CustomInput id='3 star' name='rating-range-radio' type='radio' label='★★★✰✰' value = '3' onClick={handleChange}/>
                </li>
                <li>
                  <CustomInput id='2 star' name='rating-range-radio' type='radio' label='★★✰✰✰' value = '2' onClick={handleChange}/>
                </li>  
                <li>
                  <CustomInput id='1 star' name='rating-range-radio' type='radio' label='★✰✰✰✰' value = '1' onClick={handleChange}/>
                </li>
                            
                  
                </ul>
              </div>
              
              {/* <div id='clear-filters'>
                <Button.Ripple color='primary' block>
                  Clear All Filters
                </Button.Ripple>
              </div> */}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
