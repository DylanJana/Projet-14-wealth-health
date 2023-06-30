import React from 'react'
import './CreateEmployee.css'
import EmployeeControllerForm from '../../Components/EmployeeControllerForm/EmployeeControllerForm'

export default function CreateEmployee() {
  return (
    <section className='ly--lg-container'>
      <h2 className='title--xl mb--lg text--center'>Create your employee</h2>
      <EmployeeControllerForm />
    </section>
  )
}
