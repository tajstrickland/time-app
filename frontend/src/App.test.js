import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import TimeApp from "./TimeApp";

// Optionally, if you want to check if a specific text or element is rendered
jest.mock("./TimeApp", () => () => <div>TimeApp Component</div>);

describe("App Component", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("TimeApp Component")).toBeInTheDocument();
  });

  // Additional test to ensure the TimeApp component is indeed being rendered within App
  test("includes TimeApp component", () => {
    render(<App />);
    expect(screen.getByText("TimeApp Component")).toBeInTheDocument();
  });
});
