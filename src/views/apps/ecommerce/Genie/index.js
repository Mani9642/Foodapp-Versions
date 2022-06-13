import "./index.css"
import { Link } from "react-router-dom"
import img1 from './images/box.png'
import img2 from './images/documents.png'
import img3 from './images/clothes.png'
import img4 from './images/packages.png'
import { Form,  Button} from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'


  const Genie = () => {
      return (
        <div>
          {/* <Breadcrumbs breadCrumbParent='Genie' breadCrumbActive='Details'/>*/}
      
        <div class="form-container">
          <Form class="register-form">
            {/* Uncomment the next line to show the success message */}
            {/* <div class="success-message">Success! Thank you for registering</div> */}
           <br/> <h4 className='h4'>Pick or Drop Any items</h4>
            <br/><br/>
            <Link to ='/apps/ecommerce/phlogin'>
                <center><Button   id='pick-drop' className="btn btn-warning" color='primary' variant="primary">Add Pick/Drop Details</Button> </center>
                </Link><br/><hr/>
                <p><center>Some things we can pickup and drop for you</center></p>
             <tr> 
                <td> 
                 <img src={img1} alt="no image" className="img"/><br/>Home Food
                </td>
                <td>
                <img src={img2} alt="no image" className="img"/><br/>&nbsp;&nbsp;Documents
                </td>
                <td>
                <img src={img3} alt="no image" className="img"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Clothes
                </td>
                <td> 
                &nbsp;&nbsp;<img src={img4} alt="no image" className="img"/><br/>&nbsp;Care Packages
                </td>
              </tr> 
              {/*
                <Button   className='btn-cvv ml-0 ml-sm-1 mb-50' color='primary'variant="primary">Home Food</Button> 
                <Button   className='btn-cvv ml-0 ml-sm-1 mb-50' color='primary'variant="primary">Care Packages</Button> 
                <Button   className='btn-cvv ml-0 ml-sm-1 mb-50' color='primary'variant="primary">Documents</Button> 
                <Button   className='btn-cvv ml-0 ml-sm-1 mb-50' color='primary'variant="primary">Clothes</Button> 
              */}
          </Form><br/><br/>
          <h6>&nbsp;&nbsp;&nbsp;Delivery Charges</h6>
          <p>&nbsp;&nbsp;&nbsp;Starting at ₹30 per km</p>
        </div><br/><br/>
        </div>
      )
  }
  export default Genie
  