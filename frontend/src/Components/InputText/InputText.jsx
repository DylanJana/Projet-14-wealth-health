import React from 'react'

export default function InputText({
  name,
  label,
  placeholder,
  required,
  pattern,
  onChange,
  errorMessage,
}) {
  return (
    <div className="form-col flex flex--column">
      <div>
        <label htmlFor={name}>{label}</label>
        {required && <span aria-hidden="true">*</span>}
      </div>
      <input 
        type="text" 
        name={name} 
        id={name}
        placeholder={placeholder}
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
