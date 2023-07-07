import { configureStore } from "@reduxjs/toolkit";
import employeReducer from "./employeeReducer/employeReducer";

const store = configureStore({
  reducer: {
    employees: employeReducer,
  },
});

export default store;