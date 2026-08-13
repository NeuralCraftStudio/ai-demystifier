import type { Metadata } from "next";
import StudentMission from "@/components/StudentMission";

export const metadata: Metadata = {
  title: "Student AI Mission | Demystifier_OS",
  description: "Complete a five-minute AI literacy mission: verify claims, craft a study prompt, and build a responsible study pact.",
};

export default function MissionsPage() {
  return <StudentMission />;
}