import React from 'react'
import './InputDate.css'

export default function InputDate({
  name,
  label,
  required,
  onChange,
  errorMessage
}) {
  return (
    <div className="form-col flex flex--column">
      <div>
        <label htmlFor={name}>
          {label}
        </label>
        {required && <span aria-hidden="true">*</span>}
      </div>
      <input
        type="date"
        id={name}
        name={name}
        required={required}
        onChange={onChange}
      />
      <p role='alert' className='d--none error-message'>
        {errorMessage}
      </p>
    </div>
  )
}
