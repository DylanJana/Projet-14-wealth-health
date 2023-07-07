import { createSlice, current } from "@reduxjs/toolkit"
import { employees } from "../../datas/employees"

const initialState = [...employees]

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, newEmployee) => {
      // state.push({...newEmployee.payload})
      // console.log("STATE ", state)
      // state = current(state)
      // return state
      // return(state = [...state, newEmployee.payload])
      // console.log("NEW EMPLOYEE SLICE ", newEmployee.payload)
      // state = state.push({...newEmployee.payload})
      // console.log("INITAIL ", state)
      state = JSON.parse(localStorage.getItem('employees'))
      state.push(newEmployee.payload)
      localStorage.setItem('employees', JSON.stringify(state))
        
      //localStorage.setItem('emplyees',)
    }
  }
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer