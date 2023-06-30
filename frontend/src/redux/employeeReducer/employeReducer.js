import { createSlice } from "@reduxjs/toolkit"
import { employees } from "../../datas/employees.jsx"

const initialState = [...employees]

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, newEmployee) => {
      console.log("NEWEMPLOYEE ", newEmployee)
      state = state.push({ ...newEmployee.payload});
    }
  }
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer