import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import EmployeeControllerForm from "../Components/EmployeeControllerForm/EmployeeControllerForm";

describe("Test form employee", () => {
  test("error fields should diplay error messages", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <EmployeeControllerForm />
        </Provider>
      </MemoryRouter>
    );
    userEvent.type(screen.getByLabelText(/Zip Code/i), "li")
    document.querySelector('button[type="submit"]').click()
    expect(await screen.getByTestId("error-text").getAttribute("class")).toContain("error-message");
  });

  test("Number of text input", async () => {
    render(
        <MemoryRouter>
          <Provider store={store}>
            <EmployeeControllerForm />
          </Provider>
        </MemoryRouter>
      );
    let arrayOfInputsText = []
    let allInputsText = document.querySelectorAll('input[type="text"]')
    allInputsText.forEach(input => {
        arrayOfInputsText.push(input)
    })
    expect(arrayOfInputsText).toHaveLength(4);
  })
});