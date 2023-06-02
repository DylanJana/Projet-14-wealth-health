import React from 'react'
import { useState} from 'react'

export default function EmployeeControllerForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    birthdate: "2023-06-06",
    startdate: "2023-06-06",
    streetaddress: '',
    cityaddress: '',
    stateaddress: '',
    zipcode: '',
    department: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevFormData) => ({...prevFormData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
    Name: ${formData.name}, 
    Surname: ${formData.surname}, 
    Birthdate: ${formData.birthdate}, 
    Startdate: ${formData.startdate},
    StreetAddress: ${formData.streetaddress},
    CityAddress: ${formData.cityaddress},
    StateAddress: ${formData.stateaddress},
    Zip Code: ${formData.zipcode},
    Department: ${formData.department}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input 
        type="text"
        name="name" 
        id="name"
        value={formData.name} 
        onChange={handleChange} />

      <label htmlFor="surname">Last Name</label>
      <input 
      type="text" 
      name="surname" 
      id="surname"
      value={formData.surname} 
      onChange={handleChange} />

      <label htmlFor="datebirth">Date of Birth</label>
      <input 
        id="datebirth" 
        name="datebirth"
        type="date" 
        value={formData.birthdate.value}
        onChange={handleChange} />

      <label htmlFor="startdate">Start Date</label>
      <input 
        id="startdate" 
        name="startdate"
        type="date"
        value={formData.startdate.value} 
        onChange={handleChange} />

      <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input 
            id="street" 
            name="street" 
            type="text"
            value={formData.streetaddress} 
            onChange={handleChange} />

          <label htmlFor="city">City</label>
          <input 
            id="city"
            name="city" 
            type="text" 
            value={formData.cityaddress} 
            onChange={handleChange} />


          <label htmlFor="state">State</label>
          <select 
            id="state" 
            name="state" 
            value={formData.stateaddress} 
            onChange={handleChange}>
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input 
            id="zipCode" 
            name="zipCode"
            type="number" 
            value={formData.zipcode} 
            onChange={handleChange} />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select 
        id="department" 
        name="department" 
        value={formData.department} 
        onChange={handleChange}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}
