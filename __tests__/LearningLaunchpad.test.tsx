import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LearningLaunchpad from "../components/LearningLaunchpad";

describe("LearningLaunchpad", () => {
  it("builds a responsible Action Map for the selected task", () => {
    render(<LearningLaunchpad />);

    expect(screen.getByRole("heading", { name: "Build your first responsible AI workflow" })).toBeInTheDocument();
    expect(screen.getByText("Turn a topic into a study plan that checks your understanding.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Validate a startup idea" }));
    expect(screen.getByText("Stress-test an idea before spending time or money building it.")).toBeInTheDocument();
    expect(screen.getByText("Remove customer identifiers and treat AI research as leads, not evidence.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Create this Action Map" }));
    expect(screen.getByRole("status")).toHaveTextContent("Action Map created.");
  });
});