 /**
  * Create an input select
  *
  * @params name = string name of input
  * @params label = string label of input
  * @params boolean = this input is required or not ?
  * @params function = This function is saveValues it's save values of input and convert type
  * @params array of states containing several objects. Each object has a label key and a value key
  * 
  * @return {JSX}
  * @author Dylan
  * @version 1.0
  */

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
