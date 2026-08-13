import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StudentMission from "../components/StudentMission";

describe("StudentMission", () => {
  it("guides a student from evidence checking to an actionable study sprint", () => {
    render(<StudentMission />);

    fireEvent.click(screen.getByRole("button", { name: /Ask for a verifiable source/i }));
    expect(screen.getByText(/AI can invent plausible sources/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Continue to prompt lab/i }));

    fireEvent.change(screen.getByLabelText("What do you need to study today?"), { target: { value: "cell biology" } });
    fireEvent.click(screen.getByRole("button", { name: /Prepare for an assessment/i }));
    fireEvent.click(screen.getByRole("button", { name: /Create my study prompt/i }));
    expect(screen.getByText(/Help me prepare for an assessment/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Continue to verification/i }));

    fireEvent.click(screen.getByLabelText(/I will verify important facts/i));
    fireEvent.click(screen.getByLabelText(/I will explain the final answer/i));
    fireEvent.click(screen.getByLabelText(/I will not paste private/i));
    fireEvent.click(screen.getByRole("button", { name: /Finish my study pact/i }));

    expect(screen.getByRole("heading", { name: "My 20-minute AI Study Sprint" })).toBeInTheDocument();
    expect(screen.getByText("cell biology")).toBeInTheDocument();
    expect(screen.getByText("I can answer three assessment-style questions from memory.")).toBeInTheDocument();
  });
});