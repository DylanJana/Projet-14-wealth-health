
/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import App from "../App.js";

test("The user has access to the Home page", async() => {
    render (
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    )

    expect(screen.getByTestId("title-array").textContent).toEqual('Discover your whole team :')
})

test("The user has access to the Create Employee page", async() => {
    render (
        <MemoryRouter initialEntries={["/create-employee"]}>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    )

    expect(screen.getByTestId("title-new-employee").textContent).toEqual('Create your employee')
    expect(screen.getByTestId("form-btn").textContent).toEqual('Register employee')
})