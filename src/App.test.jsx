import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders App component and get page title", () => {
    render(<App />);
    const titleText = screen.getByText("Vite + React");
    expect(titleText).toBeDefined();
  });
});
