import React from "react";
import { fireEvent, render, screen } from "../../test/testUtils";
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

    fireEvent.change(screen.getByPlaceholderText("Select a breed"), {
      target: {
        value: "abys",
      },
    });

    expect(await screen.findByRole("button")).toBeVisible();
  });

  /**
   * Integration tests
   */

  it("button becomes visible after selecting list item", async () => {
    render(<BreedForm breeds={breeds} />);

    expect(screen.queryByRole("button")).toBe(null);

    fireEvent.change(screen.getByPlaceholderText("Select a breed"), {
      target: {
        value: "abys",
      },
    });

    expect(await screen.findByRole("button")).toBeVisible();
  });
});
