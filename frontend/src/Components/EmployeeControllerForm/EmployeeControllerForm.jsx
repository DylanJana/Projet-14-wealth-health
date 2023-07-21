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
import { verifyFormFields, submitForm, allTextInputCheck, allDateInputCheck, allNumberInputCheck } from "../../formVerify/formVerify"
import ModalHrnet from 'dylan-modal-hrnet/dist/ModalHrnet/ModalHrnet'

/**
* Initializes the employee creation form and manages its verifications
*
* @return {JSX}
* @author Dylan
* @version 1.0
*/

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

  const [openModal, setIsOpenModal] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navigateToEmployeesTable = () => {
    navigate('/')
    document.querySelector('body').classList.remove('no--scroll')
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
    document.querySelector('body').classList.remove('no--scroll')
    setIsOpenModal(false)
    document.querySelector('#createEmploye').reset()
  }

  const formIsSuccess = () => {
    dispatch(addEmployee(newEmployee))
    setIsOpenModal(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formIsSuccess()
    submitForm(allTextInputCheck, allDateInputCheck, allNumberInputCheck)
  }

  /**
  * Saves the obtained values ​​and manages their types. After update state
  *
  * @params event = action in the input
  * @author Dylan
  * @version 1.0
  */
  const saveValues = (e) => {
    const target = e.target
    let value
    if (target.name === 'zipCode') {
      value = Number(target.value);
    } else if (target.name === 'dateBirth' || target.name === 'startDate') {
      let options = {day:"2-digit", month: "2-digit", year:"numeric"}
      // Format Date MM/DD/YYYY
      value = new Intl.DateTimeFormat("en-US", options).format(Number(target.valueAsDate))
    } else {
      value = target.value
    }
    setNewEmployee({ ...newEmployee, [target.name]: value });
  }

  return (
    <section className="ly--xs-container mb--xxl">  
      <form 
        id="createEmploye"
        className="form-wrapper"
        onSubmit={handleSubmit}
      >
        <div className="form-row flex mb--sm">
          <InputText
            id="firstName"
            name="firstName"
            label="First Name"
            placeholder="John"
            required={true}
            // The pattern checks that the value are letters. Minimum three characters, maximum sixteen
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
            // The pattern checks that the value are letters. Minimum three characters, maximum sixteen
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
                // This input accepts as value, digits or letters, or even both at the same time
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
                // This input accepts as value, digits or letters, or even both at the same time
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
      <ModalHrnet openModal={openModal} onClose={navigateToEmployeesTable} resetForm={resetForm}>
      </ModalHrnet>
    </section>
  );
}
