// ** Utils
import { useState } from 'react'
import axios from 'axios'
import { isObjEmpty } from '@utils'
import useJwt from '../../../../../auth/jwt/useJwt'
import GlobalVariable from "../../../../../path/global"
    const baseApiUrl = GlobalVariable.BASE_API_URL

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import {
  Form,
  Input,
  Card,
  Label,
  FormGroup,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Button,
  Row,
  Col
} from 'reactstrap'


const Address = props => {
  // ** Props
  const { stepper } = props

  // ** Vars
  const { register, errors, handleSubmit, trigger } = useForm()

  const [FullName, setFullName] = useState()
  const [Number, setNumber] = useState()
  const [HouseNo, setHouseNo] = useState()
  const [Landmark, setLandmark] = useState()
  const [City, setCity] = useState()
  const [Pincode, setPincode] = useState()
  const [State, setState] = useState()
  const [AddressType, setAddressType] = useState()

  // ** On form submit if there are no errors then go to next step
  const onSubmit = (e) => {
    e.preventDefault()
    const object = {userId:10, addressId:1, fullname:FullName, number: Number, houseno: HouseNo, landmark:Landmark, city:City, pincode:Pincode, state:State, addresstype:AddressType}

    
    if (isObjEmpty(errors)) {
      const authAxios = axios.create({
        baseURL: baseApiUrl
      })
    axios.defaults.headers.common['Authorization'] = `Bearer ${useJwt.getToken()}`
    authAxios.post('address/save', object).then(response => { 
        console.log(response)  
    }).catch((err) => {
        console.log(err)
      })
      stepper.next()
    }
  }

  return (
    <Form className='list-view product-checkout' onSubmit={onSubmit}>
      <Card>
        <CardHeader className='flex-column align-items-start'>
          <CardTitle tag='h4'>Add New Address</CardTitle>
          <CardText className='text-muted mt-25'>
            Be sure to check "Deliver to this address" when you have finished
          </CardText>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-name'>Full Name:</Label>
                <Input
                  name='checkout-name'
                  id='checkout-name'
                  required
                  onChange = {e => setFullName(e.target.value)}
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['checkout-name'] })}
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-number'>Phone Number:</Label>
                <Input
                  type='number'
                  name='checkout-number'
                  id='checkout-number'
                  required
                  onChange = {e => setNumber(e.target.value)}
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['checkout-number'] })}
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-apt-number'> House No:</Label>
                <Input
                  type='number'
                  name='checkout-apt-number'
                  id='checkout-apt-number'
                  required
                  onChange = {e => setHouseNo(e.target.value)}
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['checkout-apt-number'] })}
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-landmark'>Landmark e.g. near apollo hospital:</Label>
                <Input
                  name='checkout-landmark'
                  id='checkout-landmark'
                  required
                  onChange = {e => setLandmark(e.target.value)}
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['checkout-landmark'] })}
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-city'>Town/City:</Label>
                <Input
                  name='checkout-city'
                  id='checkout-city'
                  required
                  onChange = {e => setCity(e.target.value)}
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['checkout-city'] })}
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-pincode'>Pincode:</Label>
                <Input
                  type='number'
                  name='checkout-pincode'
                  id='checkout-pincode'
                  required
                  onChange = {e => setPincode(e.target.value)}
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['checkout-pincode'] })}
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-state'>State:</Label>
                <div className='mb-2'>
                  <select className='custom-select' required onChange ={(e) => {
                    const selectedState = e.target.value
                    setState(selectedState)
                  }}>
                    <option value="Telangana">Telangana</option>
                    <option value="Andhrapradesh">Andhrapradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamilnadu">Tamilnadu</option>
                  </select>
                  {/* {State} */}
                </div>
                
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='add-type'>Address Type:</Label>
                <Input type='select' name='add-type' id='add-type' required onChange =   {(e) => {
                  const selectedAddressType = e.target.value
                    setAddressType(selectedAddressType)
                    }}>
                
                  <option value='home'>Home</option>
                  <option value='work'>Work</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm='12'>
              <Button.Ripple type='submit' className='btn-next delivery-address' color='primary'>
                Save And Deliver Here
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div className='customer-card'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>{FullName}</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText className='mb-0'>{Number}</CardText>
            <CardText>{HouseNo}&nbsp;{Landmark}</CardText>
            <CardText>{City}&nbsp;{State}</CardText>
            <CardText>{Pincode}</CardText>
            <Button.Ripple
              block
              type='button'
              color='primary'
              onClick={() => stepper.next()}
              className='btn-next delivery-address mt-2'
            >
              Deliver To This Address
            </Button.Ripple>
          </CardBody>
        </Card>
        
      </div>
    </Form>
  )
}

export default Address