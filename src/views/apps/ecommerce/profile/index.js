import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Vertical from './Vertical'


const Wizard = () => {
  return (
    <Fragment>
        <Row>
        <Col sm='12'>
          <Vertical />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Wizard
