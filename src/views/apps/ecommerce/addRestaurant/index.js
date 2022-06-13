import { useState, useEffect } from 'react'
import useJwt from '../../../../auth/jwt/useJwt'
import axios from 'axios'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Row,
    Col,
    Input,
    Form,
    Button,
    Label,
    CustomInput
  } from 'reactstrap'

  import GlobalVariable from "../../../../path/global"
    const baseApiUrl = GlobalVariable.BASE_API_URL
  
  
  const AddRestaurant = () => {

    const [restaurantName, setRestauarntName] = useState()
    const [owner, setOwnwer] = useState()
    const [phNumber, setPhNumber] = useState()
    const [address, setAddress] = useState()
    const [pincode, setPincode] = useState()
    const [message, setMessage] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const object = {restName:restaurantName, restOwner: owner, restPhNo:phNumber, restAddress: address, restPincode: pincode}
        const authAxios = axios.create({
            baseURL: baseApiUrl
          })
        axios.defaults.headers.common['Authorization'] = `Bearer ${useJwt.getToken()}`
        authAxios.post('restaurants/save', object).then(response => { 
            console.log(response) 
            setMessage("successful") 
        }).catch((err) => {
            console.log(err)
          })

    }

    useEffect(() => {
        setMessage("")
      }, [restaurantName])


    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Restaurant Registration</CardTitle>
        </CardHeader>
        
        {message === "successful" ? (
                <b style={{ color: "green" }}> &nbsp;&nbsp; Restaurant Added Successfully</b>
              ) : (
                <div></div>
              )}
  
        <CardBody>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col sm='12'>
                <FormGroup>
                  <Label>Restaurat Name</Label>
                  <Input type='text' id='nameVertical' placeholder='Enter Restaurat Name' onChange = {e => setRestauarntName(e.target.value)}/>
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup>
                  <Label>Restaurant Owner</Label>
                  <Input type='text' id='ownerVertical' placeholder='Enter Owner name' onChange = {e => setOwnwer(e.target.value)}/>
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input type='text' id='mobileVertical' placeholder='8301285212' onChange = {e => setPhNumber(e.target.value)} />
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup>
                  <Label>Address</Label>
                  <Input type='text' id='addressVertical' placeholder='Enter Restauarant Address' onChange = {e => setAddress(e.target.value)}/>
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup>
                  <Label>Pincode</Label>
                  <Input type='text' id='pincodeVertical' placeholder='500074' onChange = {e => setPincode(e.target.value)} />
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup className='d-flex mb-0'>
                  <Button.Ripple className='mr-1' color='primary' type='submit'>
                    Submit
                  </Button.Ripple>
                  <Button.Ripple outline color='secondary' type='reset' >
                    Reset
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default AddRestaurant
  