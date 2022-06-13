import "./paymentSuccess.css"
import { useEffect, useState } from "react"
import { Link, Redirect, useHistory} from 'react-router-dom'
import img1 from '../deliveryboy/deliveryboy.jpg'
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

const renderModal = () => {
    return ( 
   <center>
    <Card id='card'>
    <br/>
        <h4 id='h4'>Order Received</h4>
      <Form >
          <FormGroup>
            <hr/>
            <img  src={img1} alt="no image" className="img"/><br/>
              <p>Our delivery agent will deliver the order on time</p>
          </FormGroup>
          <hr/>
      <tr>
     <td>  
       <p id='next'>Place your next order</p>
       </td>
     <td>         
       <Button.Ripple tag={Link} to= '/apps/ecommerce/restaurants'color='primary'>
           Home
       </Button.Ripple>
      </td>
       </tr>
      </Form>      
    </Card>
    </center>
)
}
export default renderModal