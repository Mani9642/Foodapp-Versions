import React, { useState, useEffect } from "react"
import firebaseApp from "./firebaseConfig"
import firebase  from "firebase"
import './index.css'
import { Link, Redirect, useHistory, withRouter } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Button,
  Label,
  CustomInput
} from 'reactstrap'
const formLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [confirmResult, setConfirmResult] = useState("")
  const [verficationCode, setVerificationCode] = useState("")
  const [userId, setUserId] = useState("")
  const [isSend, setIsSend] = useState(false)
  const history = useHistory()
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible"
        // other options
      }
    )
  }, [])

  // Validation
  const validatePhoneNumber = () => {
    const regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(phoneNumber)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (validatePhoneNumber()) {
      const appVerifier = window.recaptchaVerifier
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(value => {
          // success
          setConfirmResult(value)
          setIsSend(true)
        })
        .catch(error => {
          // error
          alert("Error :", error)
        })
    } else {
      alert("Invalid Number")
    }
  }
  const handleVerifyCode = e => {
    e.preventDefault()
    if (verficationCode.length === 6) {
      confirmResult
        .confirm(verficationCode)
        .then(user => {
          setUserId(user.uid)
          history.push('/apps/ecommerce/pickupdrop')
        })
       
        .catch(error => {
          alert("Error :", error)
        })
        
    } else {
      alert("Please enter a 6 digit OTP code.")
    }
    
  } 
  const onChangePhoneNumber = e => {
    e.preventDefault()
    setVerificationCode('')
    setConfirmResult(null)
    setIsSend(false)
  }
  return (
    <center>
      <Card id='card'>
    <form className="form" onSubmit={onSubmit}><br/>
      <h2 className="welcome">Login to continue</h2><br/>
      {!isSend ? (
        <div>
          <label htmlFor="number">Enter mobile number:</label>
          <input
            //  id="recaptcha-container"
            id="phlogin"
            className="form-control"
            type="text"
            placeholder="Enter phone number with country code"
            onChange={e => setPhoneNumber(e.target.value)}
            required
          /><br/>
          <div className="send-button">
            <button
              className="btn btn-primary"
              type="submit"
              id="recaptcha-container"
            >
              Send code
            </button>
          </div>
        </div>
      ) : null}
      {isSend ? (
        <div className="form">
          <label htmlFor="code">Enter verification Code :</label>
          <input
            id="vcode"
            type="number"
            placeholder="Enter six digit number"
            onChange={e => setVerificationCode(e.target.value)}
            className="form-control"
            required
          /><br/>
          <div className="btn-group">
            <div className="verify-code">
            <button
                className="btn btn-info"
                type="button"
                onClick={handleVerifyCode}
              >
                Verify Code
              </button>
            </div> &nbsp;&nbsp;
            <div className="back-button">
              <button
                className="btn btn-secondary"
                onClick={onChangePhoneNumber}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : null} 
    </form>
    </Card>
    </center>
  )
}

export default formLogin
