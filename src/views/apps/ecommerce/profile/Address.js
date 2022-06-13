import { Fragment, useState  } from 'react'

import Repeater from '@components/repeater'
import { ArrowLeft, ArrowRight, X, Plus } from 'react-feather'
import { Label, FormGroup, Row, Card, CardHeader, CardBody, Col, Input, Form, Button } from 'reactstrap'

const Address = ({ stepper, type }) => {
  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }
   const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

  return (
    <Fragment>
    
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter Your Address.</small>
      </div>
   
      <Form onSubmit={e => e.preventDefault()}>
      
        <Repeater count={count}>
          {i => (
            <Form key={i}>
              <Row className='justify-content-between align-items-center'>
                <Col md={6}>
                  <FormGroup>
                    <Label for={`item-name-${i}`}>address</Label>
                    <Input type='text' id={`item-name-${i}`} placeholder='Your address' />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for={`cost-${i}`}>Town/city</Label>
                    <Input type='text' id={`item-name-${i}`} placeholder='City' />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for={`quantity-${i}`}>pincode</Label>
                    <Input type='number' id={`cost-${i}`} placeholder='Pincode' />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for={`cost-${i}`}>State</Label>
                    <Input type='text' id={`item-name-${i}`} placeholder='State' />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                  <Button.Ripple className='btn-icon btn btn-success' >
                 
          <span className='align-middle ml-sm-25 ml-0'>save</span>
        </Button.Ripple>
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <Button.Ripple color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                    <X size={14} className='mr-50' />
                    <span>Delete</span>
                  </Button.Ripple>
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            </Form>
          )}
        </Repeater>
        <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add New</span>
        </Button.Ripple>
      
      </Form>
      </Fragment>
  )
}

export default Address
