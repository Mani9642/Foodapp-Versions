// ** Core JWT Import
import useJwt from "@src/@core/auth/jwt/useJwt"

/*const jwtOverrideConfig = {
  loginEndpoint: "http://localhost:8080/authenticate"
}

 const {jwt} = useJwt(jwtOverrideConfig)*/


const { jwt } = useJwt({})

export default jwt
