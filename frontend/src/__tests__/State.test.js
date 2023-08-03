import store from "../redux/store";
import { addEmployee } from "../redux/employeeReducer/employeReducer";
import { employeesByDefault } from "../datas/employees";

export const employeeTest =
  {
      firstName: "John",
      lastName: "Doe",
      birthdate: "13/02/1995",
      startDate: "10/01/2023",
      street: "353 rue des devs",
      city: "Computy",
      state: "Storage",
      zipCode: "010101",
      department: "Engine",
   };

describe("Redux state test", () => {
  test("State must return my employee array by default", () => {
    const employeesState = store.getState().employees;
    expect(employeesState).toEqual(employeesByDefault);
  });

  test("I add one more employee to the store", () => {
    store.dispatch(addEmployee(employeeTest));
    const employeesState = store.getState().employees;
    expect(employeesState.length).toEqual(3);
  });

  test("I add three more test employees", () => {
    for (let i = 0; i < 3; i++) {
      store.dispatch(addEmployee(employeeTest));
    }
    let newEmployeesArray = store.getState().employees
    newEmployeesArray.forEach(employee => {
        employeesByDefault.push(employee)
    })
    // Equal to my employeesByDefault array and news employees
    expect(employeesByDefault.length).toEqual(6);
  });
});