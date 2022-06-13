import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Redirect, useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form"
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


const guestUser = () => {
  
  const inputFeildStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  }

  const { register, handleSubmit, errors} = useForm()

  const [username, setUserName] = useState()
  const [Email, setEmail] = useState()
  const [phNum, setPhoneNumber] = useState()
  const [message, setMessage] = useState("")
  const history = useHistory()

const submitHandler = (e) => {
  console.log(e)
    const object = {userName:username, email:Email, phoneNumber:phNum}
    const authAxios = axios.create({
      baseURL: baseApiUrl
    })

    authAxios.post('users/guestLogin', object).then(response => {
        console.log(response)
        setMessage("successfull")
        history.push("/apps/ecommerce/checkout")
    }).catch((err) => {
      console.log(err)
    })
}

    useEffect(() => {
      setMessage(" ")
    }, [username])

    const mystyle = {  
      color: "red",
      fontSize: "15px"
     }

  return (
    
    <Card>
      <CardHeader>
        <CardTitle tag='h3'>Guest User</CardTitle>
      </CardHeader>

    {message === "successfull" ? (
          <b style={{ color: "green"}}> &nbsp;&nbsp; User Added Successfully</b>
    ) : (
      <div></div>
    )}

    <CardBody>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Row>
          <Col sm='12'>
            <FormGroup>
              <Label>User Name<span style={mystyle}>*</span></Label><br/>
              <input style = {inputFeildStyle} type='text' name = "username" id='nameVertical'  placeholder='Enter full name' onChange = {e => setUserName(e.target.value)} ref = {register({required:"User Name is required"})}/>
              <span style={{ color: "red"}}>{errors.username?.message}</span>
            </FormGroup>
          </Col>
          <Col sm='12'>
          <FormGroup>
              <Label>Email<span style={mystyle}>*</span></Label><br/>
              <input style = {inputFeildStyle} type='text' name = "email" id='emailVertical'  placeholder='email@example.com' onChange = {e => setEmail(e.target.value)} ref = {register({required:"Email is required", pattern: { value: /^\S+@\S+$/i, message: "This is not a valid email"}})}/>
              <span style={{ color: "red"}}>{errors.email?.message}</span>
            </FormGroup>
          </Col>
          <Col sm='12'>
          <FormGroup>
              <Label>Phone Number<span style={mystyle}>*</span></Label><br/>
              <input style = {inputFeildStyle} type='number' name = "phoneNumber" id='phoneNumberVertical'  placeholder='Enter phone number' onChange = {e => setPhoneNumber(e.target.value)} ref = {register({required:"Phone Number is required", minLength: { value: 10, message: "Phone Number must be 10 digits"}, maxLength: {value: 10, message: "Phone Number must be 10 digits" }})}/>
                <span style={{ color: "red"}}>{errors.phoneNumber?.message}</span>
            </FormGroup>
          </Col>
          <Col sm='12'>
          <FormGroup className='flex'>
                  <Button.Ripple className='mr-1' color='primary' type='submit'>
                    Proceed
                  </Button.Ripple>
                  <Button.Ripple tag={Link} to='/apps/ecommerce/login' outline color='secondary'>
                    Login
                  </Button.Ripple>
                </FormGroup>
          </Col>
        </Row>
      </Form>
    </CardBody>      
    </Card>
    
   )
  } 
export default guestUser
      
