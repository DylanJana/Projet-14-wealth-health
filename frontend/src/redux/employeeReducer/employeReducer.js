import { createSlice } from "@reduxjs/toolkit";

const initialState= [];

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;