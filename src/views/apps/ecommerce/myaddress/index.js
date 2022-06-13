import React, { useState, Fragment } from "react"
import { nanoid } from "nanoid"
import "./index.css"
import data from "./mock-data.json"
import ReadOnlyRow from "./ReadOnlyRow"
import EditableRow from "./EditableRow"
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

const myaddress = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    number: "",
    houseNo: "",
    landmark: "",
    city: "",
    pincode: "",
    state: ""
  })

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    number: "",
    houseNo: "",
    landmark: "",
    city: "",
    pincode: "",
    state: ""
  })

  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid,
      fullName: addFormData.fullName,
      number: addFormData.number,
      houseNo: addFormData.houseNo,
      landmark: addFormData.landmark,
      city:  addFormData.city,
      pincode: addFormData.pincode,
      state: addFormData.state
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      number: editFormData.number,
      houseNo: editFormData.houseNo,
      landmark: editFormData.landmark,
      city:  editFormData.city,
      pincode: editFormData.pincode,
      state: editFormData.state
    }

    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === editContactId)

    newContacts[index] = editedContact

    setContacts(newContacts)
    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      number: contact.number,
      houseNo: contact.houseNo,
      landmark: contact.landmark,
      city: contact.city,
      pincode: contact.pincode,
      state: contact.state
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === contactId)

    newContacts.splice(index, 1)

    setContacts(newContacts)
  }

  return (
    <div className="app-container">
      <Card id='card1'>
  <CardBody>    
      <Form onSubmit={handleAddFormSubmit}>  
      <CardTitle tag='h4'>Add New Address</CardTitle>
      <Label for="fname"><span class="required-mark">*</span>&nbsp;Full Name :</Label>
        <Input
          type="text"
          name="fullName"
          required="required"
          onChange={handleAddFormChange}
        />
        <Label for="fname">
<span class="required-mark">*</span>&nbsp;
Number :</Label>
        <Input
          type="text"
          name="number"
          required="required"
          onChange={handleAddFormChange}
        />
        <Label for="fname"><span class="required-mark">*</span>&nbsp;House No. :</Label>
        <Input
          type="number"
          name="houseNo"
          required="required"
          onChange={handleAddFormChange}
        />
        <Label for="fname"><span class="required-mark">*</span>&nbsp;Landmark :</Label>
        <Input
          type="text"
          name="landmark"
          required="required"
          onChange={handleAddFormChange}
        />
        <Label for="fname"><span class="required-mark">*</span>&nbsp;Town/City :</Label>
        <Input
          type="text"
          name="city"
          required="required"
          onChange={handleAddFormChange}
        />
        <Label for="fname"><span class="required-mark">*</span>&nbsp;Pincode :</Label>
        <Input
          type="number"
          name="pincode"
          required="required"
          onChange={handleAddFormChange}
        />
        <Label for="fname"><span class="required-mark">*</span>&nbsp;State :</Label>
        <Input
          type="state"
          name="state"
          required="required"
          onChange={handleAddFormChange}
        />
       <center> <Button type="submit"  className='mr-1' color='success'>Add</Button></center>
      </Form>
      </CardBody> </Card>
      <Form onSubmit={handleEditFormSubmit}>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
      </Form>
      </div>
  )
}

export default myaddress
