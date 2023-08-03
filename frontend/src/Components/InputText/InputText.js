 /**
  * Create an input text
  *
  * @params name = string name of input
  * @params label = string label of input
  * @params string
  * @params boolean = this input is required or not ?
  * @params Regexp = Checks that the input value contains either numbers or letters, or even both at the same time
  * @params function = This function is saveValues it's save values of input and convert type
  * @params array of states containing several objects. Each object has a label key and a value key
  * 
  * @return {JSX}
  * @author Dylan
  * @version 1.0
  */

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
