export type JobEntry = {
  id: number;
  title: string;
  company: string;
  location: string;
  status: "Saved" | "Applied" | "Interview";
};
