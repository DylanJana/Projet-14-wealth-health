 /**
  * Create an input number
  *
  * @params name = string name of input
  * @params label = string label of input
  * @params boolean = this input is required or not ?
  * @params function = This function is saveValues it's save values of input and convert type
  * @params string
  * 
  * @return {JSX}
  * @author Dylan
  * @version 1.0
  */

export default function InputNumber({
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
        type="number"
        id={name}
        name={name}
        required={required}
        onChange={onChange}
      />
      <p role='alert' className='d--none error-message' data-testid="error-text">
        {errorMessage}
      </p>
    </div>
  )
}
