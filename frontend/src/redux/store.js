import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer/employeReducer";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;