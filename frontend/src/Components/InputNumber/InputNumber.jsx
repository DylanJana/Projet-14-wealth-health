import React from 'react'

export default function InputNumber({
  name,
  label,
  required,
  pattern,
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
        type="number"
        id={name}
        name={name}
        required={required}
        pattern={pattern}
        onChange={onChange}
      />
      <p role='alert' className='d--none error-message'>
        {errorMessage}
      </p>
    </div>
  )
}
