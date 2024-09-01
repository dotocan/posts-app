import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { logMessage } from "../../../shared/constants";
import { Button } from "./Button";

describe("Button.tsx", () => {
  test("Loads and displays Button component", async () => {
    render(
      <Button text="ButtonTest" onClick={() => {}} message={logMessage} />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent('ButtonTest');
  });

  test("Button should be disabled", async () => {
    render(
      <Button text="ButtonTest" onClick={() => {}} message={logMessage} disabled />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
