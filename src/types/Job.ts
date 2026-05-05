export type JobEntry = {
  id: number;
  title: string;
  company: string;
  location: string;
  icon: "code" | "atom" | "box" | "brush";
  type: "Remote" | "Office" | "Hybrid";
  status: "Saved" | "Applied" | "Interview";
};
