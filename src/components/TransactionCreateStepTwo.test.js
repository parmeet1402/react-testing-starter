import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disbaled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "3" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount is entered the pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "3" }} />);
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50"); 
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

test("integration test: if an amount is entered the pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "3" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
