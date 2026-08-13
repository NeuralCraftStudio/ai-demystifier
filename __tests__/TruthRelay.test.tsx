import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TruthRelay from "../components/TruthRelay";

describe("TruthRelay", () => {
  it("teaches the three trust signals through a short interactive relay", () => {
    render(<TruthRelay />);

    fireEvent.click(screen.getByRole("button", { name: /Verify the important claims with reliable sources/i }));
    expect(screen.getByText(/AI can generate plausible details and citations/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Transmit next signal/i }));

    fireEvent.click(screen.getByRole("button", { name: /Every possible action it can take/i }));
    fireEvent.click(screen.getByRole("button", { name: /Transmit next signal/i }));

    fireEvent.click(screen.getByRole("button", { name: /Remove personal details and use an approved tool/i }));
    fireEvent.click(screen.getByRole("button", { name: /See my AI rule/i }));

    expect(screen.getByRole("heading", { name: "Your AI trust reflex is activated." })).toBeInTheDocument();
    expect(screen.getByText(/I verify important claims, protect data/i)).toBeInTheDocument();
  });
});