import axios from "axios"
import { useEffect, useState, Fragment } from "react"
import { Label, FormGroup, Row,  Col, Input, Form, Button, Card,
  CardHeader,
  CardTitle,
  CardBody} from 'reactstrap'

import { useSelector } from 'react-redux'
import GlobalVariable from "../../../../path/global"
    const baseApiUrl = GlobalVariable.BASE_API_URL


const PersonalInfo = () => {
  const userData = useSelector(state => state.auth.userData)

  const [UserName, setUserName] = useState(userData.userName)
  const [Email, setEmail] = useState(userData.email)
  const [PhoneNumber, setPhoneNumber] = useState(userData.phoneNumber)
  const [city, setCity] = useState(userData.address)
  const [message, setMessage] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    const object = {userId: userData.userId, userName: UserName, email: Email, phoneNumber: PhoneNumber, address: city, status: 'active', restId: userData.restId, firstName: userData.firstName, lastName: userData.lastName, password: userData.password, sysTime: userData.sysTime, role: userData.role}
    const authAxios = axios.create({
        baseURL: baseApiUrl
      })
    authAxios.put('users/edit', object).then(response => { 
        console.log(response)
        setMessage("successful")  
    }).catch((err) => {
        console.log(err)
      })
      
    useEffect(() => {
      setMessage("")
    }, [UserName])

}
    return (
    // <Form onSubmit={submitHandler}>
    //         <Row className='justify-content-between align-items-center'>
    //             <Col md={6}>
    //               <FormGroup>
    //                 <Label >UserName</Label>
    //                 <Input type='text' value={userData.userName}
    //                  onChange = {e => setUserName(e.target.value)} />
    //               </FormGroup>
    //             </Col>
    //             <Col md={6}>
    //               <FormGroup>
    //                 <Label >Email</Label>
    //                 <Input type='text' value={userData.email} 
    //                 onChange = {e => setEmail(e.target.value)}  />
    //               </FormGroup>
    //             </Col>
    //             <Col md={6}>
    //               <FormGroup>
    //                 <Label >PhoneNumber</Label>
    //                 <Input type='number'  value={userData.phoneNumber} 
    //                 onChange = {e => setPhoneNumber(e.target.value)}/>
    //               </FormGroup>
    //             </Col>
    //             <Col md={6}>
    //               <FormGroup>
    //                 <Label >City</Label>
    //                 <Input type='text'  placeholder={userData.address} 
    //                 onChange = {e => setCity(e.target.value)} />
    //               </FormGroup>
    //             </Col>
    //             <Col md={6}>
    //               <FormGroup>
    //               <Button.Ripple className='btn-icon btn btn-success' >
    //               <span className='align-middle ml-sm-25 ml-0' type = 'submit'>Update</span>
    //                </Button.Ripple>
    //               </FormGroup>
    //             </Col>
    //           </Row>
    //   </Form>
    <Card>
    <CardHeader>
      <CardTitle tag='h4'>Personal</CardTitle>
    </CardHeader>
    
    {message === "successful" ? (
            <b style={{ color: "green" }}> &nbsp;&nbsp; Updated Successfully</b>
          ) : (
            <div></div>
          )}

    <CardBody>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col sm='12'>
            <FormGroup>
              <Label>User Name</Label>
              <Input type='text' defaultValue={userData.userName}
                      onChange = {e => setUserName(e.target.value)} />
            </FormGroup>
          </Col>
          <Col sm='12'>
            <FormGroup>
              <Label>Email</Label>
              <Input type='text'  defaultValue={userData.email} 
                     onChange = {e => setEmail(e.target.value)}  />
            </FormGroup>
          </Col>
          <Col sm='12'>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input type='number'   defaultValue={userData.phoneNumber} 
                     onChange = {e => setPhoneNumber(e.target.value)}/>
            </FormGroup>
          </Col>
          <Col sm='12'>
            <FormGroup>
              <Label>City</Label>
              <Input type='text'   defaultValue={userData.address} 
                     onChange = {e => setCity(e.target.value)} />
            </FormGroup>
          </Col>
          <Col sm='12'>
            <FormGroup className='d-flex mb-0'>
              <Button.Ripple className='mr-1' color='primary' type='submit'>
                Update
              </Button.Ripple>
            
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </CardBody>
  </Card>
    )
    
}
export default PersonalInfo