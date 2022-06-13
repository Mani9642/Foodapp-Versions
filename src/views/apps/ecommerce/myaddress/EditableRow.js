import React from "react"
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
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <div>
       <Card id='card2'><br/>
        <h5 id='h6'>Edit Address</h5>
    <CardBody>
      <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Number</th>&nbsp;
              <th>House No</th>&nbsp;
              <th>Landmark</th>&nbsp;
              <th>City</th>&nbsp;
              <th>Pincode</th>&nbsp;
              <th>State</th>
                 </tr>
          </thead>
          <tbody>
    <tr>
      <td>
        <Input
          type="text"
          required="required"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Input
          type="text"
          required="required"
          name="number"
          value={editFormData.number}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="text"
          required="required"
          name="houseNumber"
          value={editFormData.houseNo}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="text"
          required="required"
          name="landmark"
          value={editFormData.landmark}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="text"
          required="required"
          name="city"
          value={editFormData.city}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="text"
          required="required"
          name="pincode"
          value={editFormData.pincode}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="state"
          required="required"
          name="state"
          value={editFormData.state}
          onChange={handleEditFormChange}
        />
      </td>
      </tr><br/>
      <tr>
      <td>
        <Button type="submit" color='success'>Save</Button></td>
        <td> <Button type="button" onClick={handleCancelClick}> Cancel </Button>
      </td>
    </tr>
    </tbody>
        </table>
        </CardBody> 
         </Card>
    </div>
  )
}

export default EditableRow
