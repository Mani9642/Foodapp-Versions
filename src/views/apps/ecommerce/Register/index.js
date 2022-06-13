import { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
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


const Register = () => {

  const [FirstName, setfirstName] = useState()
  const [LastName, setlastName] = useState()
  const [UserName, setuserName] = useState()
  const [Email, setemail] = useState()
  const [pwd, setpassword] = useState()
  const [phNum, setphoneNumber] = useState()
  const [message, setMessage] = useState("")
  const history = useHistory()

const submitHandler = (e) => {
  e.preventDefault()
  const object = {firstName:FirstName, lastName:LastName, userName:UserName, email:Email, password:pwd, phoneNumber:phNum}
  const authAxios = axios.create({
    baseURL: baseApiUrl
  })

  //axios.defaults.headers.common['Authorization'] = `Bearer ${useJwt.getToken()}`
 authAxios.post('users/register', object).then(response => {
   console.log(response)
   setMessage("successfull")
  history.push("/apps/ecommerce/checkout")
 }).catch((err) => {
   console.log(err)
 })
}  


  useEffect(() => {
    setMessage(" ")
  }, [UserName])

  const mystyle = {  
    color: "red",
    fontSize: "15px"
   }
  return (

    <Card>
      <CardHeader>
        <CardTitle tag='h3'>Register</CardTitle>
      </CardHeader>

      {message === "successfull" ? (
          <b style={{ color: "green"}}> &nbsp;&nbsp; User added Successfully</b>
      ) : (
        <div></div>
      )}

      <CardBody>
        <Form onSubmit={submitHandler}>
          <Row>
            <Col sm='10'>
              <FormGroup>
                <Label>First Name<span style={mystyle}>*</span></Label>
                <Input type='text' id='nameVertical' required placeholder='Enter first name' onChange = {e => setfirstName(e.target.value)}/>
              </FormGroup>
            </Col>

            <Col sm='10'>
              <FormGroup>
                <Label>Last Name<span style={mystyle}>*</span></Label>
                <Input type='text' id='nameVertical' placeholder='Enter Last name'  required onChange = {e => setlastName(e.target.value)}/>
              </FormGroup>              
            </Col>

            <Col sm='10'>
              <FormGroup>
                <Label>Username<span style={mystyle}>*</span></Label>
                <Input type='text' id='nameVertical' required placeholder='Enter User name' onChange = {e => setuserName(e.target.value)}/>
              </FormGroup>
            </Col>

            <Col sm='10'>
              <FormGroup>
                <Label>Email<span style={mystyle}>*</span></Label>
                <Input type='text' id='nameVertical' required placeholder='email@example.com' onChange = {e => setemail(e.target.value)}/>
              </FormGroup>
            </Col>

            <Col sm='10'>
              <FormGroup>
                <Label>Password<span style={mystyle}>*</span></Label>
                <Input type='password' id='nameVertical' required placeholder='enter password' onChange = {e => setpassword(e.target.value)}/>
              </FormGroup>
            </Col>

            <Col sm='10'>
              <FormGroup>
                <Label>PhoneNumber<span style={mystyle}>*</span></Label>
                <Input type='number' id='namevertical' required placeholder='enter phone number' onChange = {e => setphoneNumber(e.target.value)}/>
              </FormGroup>
            </Col>

            <Col sm='10'>
              <FormGroup className='flex'>
                <Button.Ripple className='mr-1' color='primary' type='submit'>
                  Submit & Checkout
                </Button.Ripple>
              </FormGroup>
            </Col>

          </Row>
        </Form>
      </CardBody>
    </Card>
  )
  
}

export default Register