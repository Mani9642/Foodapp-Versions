import { Fragment, useState, useEffect } from 'react'

import axios from 'axios'
import { Row, Col } from 'reactstrap'
import Vertical from './Vertical'
// import ProfileHeader from './ProfileHeader'

const Wizard = () => {
    // const [data, setData] = useState(null)
    // useEffect(() => {
    //   axios.get('/profile/data').then(response => setData(response.data))
    // }, [])
  
  return (
    <Fragment>
        <Row>
        <Col sm='12'>
          <Vertical />
          {/* <ProfileHeader data={data} /> */}
        </Col>
      </Row>
    </Fragment>
  )
}
export default Wizard
