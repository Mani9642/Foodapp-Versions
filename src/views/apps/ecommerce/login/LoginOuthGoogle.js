import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useHistory } from 'react-router-dom'

const clientId = "126753037480-0tp02emhgasb0ps5eqb8os61pfjofhic.apps.googleusercontent.com"

const LoginOuthGoogle = () => {

    const history = useHistory()
    const [showloginButton, setShowloginButton] = useState(true)
    const [showlogoutButton, setShowlogoutButton] = useState(false)
    
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj)
        setShowloginButton(false)
        setShowlogoutButton(true)
        history.push("/apps/ecommerce/checkout")

    }

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res)
    }

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully")
        setShowloginButton(true)
        setShowlogoutButton(false)
    }

    return (
        <div>
            { showloginButton ? <GoogleLogin
                    clientId={clientId}
                    buttonText="Continue with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    //cookiePolicy={'single_host_origin'}
                    //isSignedIn={true}
                /> : null}

            { showlogoutButton ? <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    )
}
export default LoginOuthGoogle