import { createSlice } from "@reduxjs/toolkit"
import { employees } from "../../datas/employees.jsx"

const initialState= [
  ...employees
]

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, newEmployee) => {
      return(
        state = [...state, newEmployee.payload]
      )
    }
  }
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer