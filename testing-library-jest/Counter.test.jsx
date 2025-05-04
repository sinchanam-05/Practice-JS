import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

test("increments on click ", () => {
  render(<Counter />);
  const btn = screen.getByTestId("btn");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1");
});
