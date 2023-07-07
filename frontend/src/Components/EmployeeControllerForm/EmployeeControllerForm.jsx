import React from "react"
import { useState } from "react"
import { States } from "../../datas/states"
import { Departments } from "../../datas/departments"
import InputText from "../InputText/InputText.jsx"
import InputDate from "../InputDate/InputDate.jsx"
import InputSelect from "../InputSelect/InputSelect"
import InputNumber from "../InputNumber/InputNumber"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addEmployee } from "../../redux/employeeReducer/employeReducer"
import { verifyFormFields } from "../../formVerify/formVerify"
// import Modal from "modal/dist/Modal";

/*** Modal Plugin */
// import Modal from "Modal-wealth-health/dist/Modal";

export default function EmployeeControllerForm() {
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    dateBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: undefined,
    zipCode: 0,
    department: ""
  })

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navigateToEmployeesTable = () => {
    navigate('/')
  }
  
  const resetForm = () => {
    setNewEmployee({
      firstName: "",
      lastName: "",
      dateBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: undefined,
      zipCode: 0,
      department: ""
    })
    setIsSuccessModalOpen(false)
  }

  const formIsSuccess = (e) => {
    e.preventDefault()
    dispatch(addEmployee(newEmployee))
    setIsSuccessModalOpen(true)
    alert('COOL SUCCESS ')
  }

  const saveValues = (e) => {
    const target = e.target
    let value
    if (target.name === 'zipCode') {
      value = Number(target.value);
    } else if (target.name === 'dateBirth' || target.name === 'startDate') {
      value = new Intl.DateTimeFormat("en-US").format(Number(target.valueAsDate))
    } else {
      value = target.value
    }
    console.log('new empl',newEmployee) ;
    setNewEmployee({ ...newEmployee, [target.name]: value });
  }

  return (
    <section className="ly--xs-container mb--xxl">  
      <form 
        id="createEmploye"
        className="form-wrapper"
        onSubmit={formIsSuccess}
      >
        <div className="form-row flex mb--sm">
          <InputText
            id="firstName"
            name="firstName"
            label="First Name"
            placeholder="John"
            required={true}
            pattern="^[A-Za-z0-9]{3,16}$"
            onChange={saveValues}
            errorMessage="Please enter at least 3 characters without special characters!"
          />

          <InputText
            id="lastName"
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            required={true}
            pattern="^[A-Za-z0-9]{3,16}$"
            onChange={saveValues}
            errorMessage="Please enter at least 3 characters without special characters!"
          />
        </div>
        <div className="form-row flex mb--sm">
          <InputDate
            id="dateBirth"
            name="dateBirth"
            label="Date of Birth"
            required={true}
            onChange={saveValues}
            errorMessage="Please enter a valid date!"
          />

          <InputDate
            id="startDate"
            name="startDate"
            label="Start Date"
            required={true}
            onChange={saveValues}
            errorMessage="Please enter a valid date!"
          />
        </div>
        <div>
          <fieldset className="address mb--sm">
            <legend>Address</legend>
            <div className="form-row flex mb--sm">
              <InputText
                id="street"
                name="street"
                label="Street"
                placeholder="37 street Benoît"
                required={true}
                pattern="^[#.0-9a-zA-Z\s,-]+$"
                onChange={saveValues}
                errorMessage="Please enter a valid address !"
              />

              <InputText
                id="city"
                name="city"
                label="City"
                placeholder="Paris"
                required={true}
                pattern="^[#.0-9a-zA-Z\s,-]+$"
                onChange={saveValues}
                errorMessage="Please enter a valid city !"
              />
            </div>
            <div className="form-row flex mb--sm">
              <InputSelect 
                id="state"
                name="state"
                label="States"
                required={false}
                options={States}
                onChange={saveValues}
              />

              <InputNumber 
                id="zipCode"
                name="zipCode"
                label="Zip Code"
                required={true}
                onChange={saveValues}
                errorMessage="Please enter your zip code !"
              />
            </div>
            <div className="form-row">
              <InputSelect 
                id="department"
                name="department"
                label="Department"
                required={true}
                options={Departments}
                onChange={saveValues}
              />
            </div>
          </fieldset>
        </div>
        <button 
        type="submit"
        className="btn--plain btn--green"
        onClick={verifyFormFields}>Register employee</button>
      </form>
      {/* <Modal /> */}
    </section>
  );
}
