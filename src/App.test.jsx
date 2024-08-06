import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

describe("App component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders App component and get page title", () => {
    render(<App />);
    const titleText = screen.getByText("Vite + React");
    expect(titleText).toBeDefined();
  });

  it("can click count button and get updated", () => {
    // simulasi render component App
    render(<App />);

    // get button dengan isi teks count is 0
    let countText = screen.getByText("count is 0");
    expect(countText).toBeDefined();

    // simulasi klik button
    fireEvent.click(countText);

    // get button dengan isi teks count is 1
    countText = screen.getByText("count is 1");
    expect(countText).toBeDefined();
  });
});
