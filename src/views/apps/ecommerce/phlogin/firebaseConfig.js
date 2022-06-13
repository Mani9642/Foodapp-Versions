import * as firebase from "firebase/app"

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCBE8YlCjAlHoYE42QXv0gk-RBDY5_ZQnA",
  authDomain: "food-application-8bb60.firebaseapp.com",
  projectId: "food-application-8bb60",
  storageBucket: "food-application-8bb60.appspot.com",
  messagingSenderId: "1022022237596",
  appId: "1:1022022237596:web:84ab3dab7d593c05bf1c59",
  measurementId: "G-MJWT4486CB"
  }
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig)
  export default firebaseApp
