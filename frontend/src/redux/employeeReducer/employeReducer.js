import { createSlice } from "@reduxjs/toolkit"
import { employees } from "../../datas/employees.jsx"

const initialState = [...employees]

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, newEmployee) => {
      console.log("NEWEMPLOYEE ", newEmployee)
      //state.push({ ...newEmployee.payload});
      // state = [...initialState,newEmployee.payload]
      localStorage.setItem('employees', JSON.stringify(newEmployee.payload))
      state = [...initialState]
        console.log('state =======', state)
        
      //localStorage.setItem('emplyees',)
    }
  }
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer