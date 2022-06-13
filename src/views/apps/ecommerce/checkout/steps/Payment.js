import { Form, Label, Card, CardHeader, CardTitle, CardBody, CardText, CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import Cart from './Cart'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const Payment = ({total}) => {
const [amount, setAmount] = useState('')
const handleSubmit = (e) => {
  e.preventDefault()
  total = total + 30
  
   const options = {
      key: "rzp_test_aCeiKK2OL8zZI4",
      key_secret: "tsl8Aua9efRurL7XI5hswsX8",
      amount:  total * 100,
      currency: "INR",
      name: "Food Bite",
      description:" for testing",
      function (response) { 
          alert(response.razorpay_payment_id)
        },
    prefill: {
        name: "Aishwarya",
        email: "sprash002@gmail.com",
        contact: "6303442624"
    },
    notes: {
        address: "note value"
    },
    theme: {
        color: "skyblue"
    }
  }
const rzp = new window.Razorpay(options)
rzp.open()
   
  }

  return (
    <Form
      className='list-view product-checkout'
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div className='payment-type'>
        <Card>
          <CardHeader className='flex-column align-items-start'>
            <CardTitle tag='h4'>Payment options</CardTitle>
            <CardText className='text-muted mt-25'>Be sure to click on correct payment option</CardText>
          </CardHeader>
          <CardBody>

            <ul className='other-payment-options list-unstyled'>
              <li>
            <button className="btn btn-info" onClick={ handleSubmit }>Online Payment</button>
            <br></br>
            </li>
           <view style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           </view>
           <li>
             <br>
             </br>
           <button className="btn btn-info" >
         <Link to = '/apps/ecommerce/PaymentSuccess'>
          Cash on Delivery
          </Link>
          </button>
          </li>
           <li className='py-50'>
              </li>
              <div className='demo-inline-spacing'>
      <div className='basic-modal'>
       
      </div>
      </div>
            

    {/* <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA']
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId'
                }
              }
            }
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: ''
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'INR',
            countryCode: 'IN'
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION']  
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest)
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      /> */}
              
            </ul>
            
          </CardBody>
        </Card>
      </div>
      {/* <div className='amount-payable checkout-options'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Price Details</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className='list-unstyled price-details'>
              <li className='price-detail'>
                <div className='details-title'>Price of 3 items</div>
                <div className='detail-amt'>
                  <strong>₹{total + 30}</strong>
                </div>
              </li>
              <li className='price-detail'>
                <div className='details-title'>Delivery Charges</div>
                <div className='detail-amt discount-amt text-success'>Free</div>
              </li>
            </ul>
            <hr />
            <ul className='list-unstyled price-details'>
              <li className='price-detail'>
                <div className='details-title'>Amount Payable</div>
                <div className='detail-amt font-weight-bolder'>₹{total + 30}</div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div> */}
    </Form>
  )
}


export default Payment
