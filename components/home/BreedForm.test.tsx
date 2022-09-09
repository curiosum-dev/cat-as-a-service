import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../test/testUtils";
import { BreedForm } from "./BreedForm";

const breeds = [
  { id: "abys", name: "Abyssinian" },
  { id: "aege", name: "Aegean" },
  { id: "abob", name: "American Bobtail" },
  { id: "acur", name: "American Curl" },
];

const cats = new Map([
  ["abys", ""],
  ["aege", ""],
  ["abob", ""],
  ["acur", ""],
]);

describe("BreedForm", () => {
  /**
   * Unit tests
   */

  it("button isn't visible by default", async () => {
    render(<BreedForm breeds={breeds} />);

    expect(screen.queryByRole("button")).toBe(null);
  });

  it("button is visible after selecting list item", async () => {
    render(<BreedForm breeds={breeds} />);
    const user = userEvent.setup();

    user.selectOptions(screen.getByPlaceholderText("Select a breed"), [
      "Abyssinian",
    ]);

    expect(await screen.findByRole("button")).toBeVisible();
  });

  /**
   * Integration tests
   */

  it("button becomes visible after selecting list item", async () => {
    render(<BreedForm breeds={breeds} />);
    const user = userEvent.setup();

    expect(screen.queryByRole("button")).toBe(null);

    user.selectOptions(screen.getByPlaceholderText("Select a breed"), [
      "Abyssinian",
    ]);

    expect(await screen.findByRole("button")).toBeVisible();
  });
});
