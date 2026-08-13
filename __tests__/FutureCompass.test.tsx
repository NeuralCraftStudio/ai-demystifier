import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FutureCompass from "../components/FutureCompass";

describe("FutureCompass", () => {
  it("creates a self-directed pact after the learner defines their choices", () => {
    render(<FutureCompass />);

    expect(screen.getByText("Complete the three selections to generate a short, practical agreement for how you want to use AI.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Make a high-stakes decision/i }));
    fireEvent.click(screen.getByRole("button", { name: /My accountability/i }));
    fireEvent.click(screen.getByRole("button", { name: /AI as agent/i }));

    expect(screen.getByText(/Before using an agent, write the goal/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Make this my first pact/i }));
    expect(screen.getByRole("status")).toHaveTextContent("Pact created.");
  });
});