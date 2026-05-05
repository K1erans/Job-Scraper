import { type JobEntry } from "../types/Job";

export function JobCard({ job }: { job: JobEntry }) {
  return (
    <article className="job-card">
      <div>
        <h2>{job.title}</h2>
        <p>{job.company}</p>
      </div>
      <div className="job-meta">
        <span>{job.location}</span>
        <span>{job.status}</span>
      </div>
    </article>
  );
}
