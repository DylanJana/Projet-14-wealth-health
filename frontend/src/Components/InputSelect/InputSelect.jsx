import React from 'react'

export default function InputSelect({
  name,
  label,
  required,
  onChange,
  options
}) {
  return (
    <div className="form-col flex flex--column">
      <div>
        <label htmlFor={name}>
          {label}
        </label>
        {required && <span aria-hidden="true">*</span>}
      </div>
      <select
        id={name}
        name={name}
        required={required}
        onChange={onChange}>
          <option value=''>Sélectionner</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
