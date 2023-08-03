import { createSlice } from "@reduxjs/toolkit"
import { employeesByDefault } from "../../datas/employees.js"

const initialState = [...employeesByDefault]

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, newEmployee) => {
      state = localStorage.getItem('employees') ?  JSON.parse(localStorage.getItem('employees')) : []
      state.push(newEmployee.payload)
      localStorage.setItem('employees', JSON.stringify(state))
    }
  }
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer