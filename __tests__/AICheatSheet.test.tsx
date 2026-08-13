import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AICheatSheet from "../components/AICheatSheet";

describe("AICheatSheet", () => {
  it("explains MCP and lets learners filter the glossary", () => {
    render(<AICheatSheet />);

    expect(screen.getByRole("heading", { name: /MCP is a standard connector/i })).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox", { name: "Search AI terms" }), { target: { value: "MCP" } });

    expect(screen.getAllByText("Model Context Protocol").length).toBeGreaterThan(1);
    expect(screen.getAllByText("MCP server").length).toBeGreaterThan(1);
    expect(screen.queryByText("Large language model")).not.toBeInTheDocument();

    fireEvent.change(screen.getByRole("textbox", { name: "Search AI terms" }), { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: "Agents" }));
    expect(screen.getByText("AI agent")).toBeInTheDocument();
  });
});