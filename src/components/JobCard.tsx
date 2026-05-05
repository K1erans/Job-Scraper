import { type ReactNode } from "react";
import { type JobEntry } from "../types/Job";

const iconPaths = {
  code: (
    <>
      <path d="m10 8-4 4 4 4" />
      <path d="m14 16 4-4-4-4" />
      <path d="m13 5-2 14" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.7" />
      <path d="M20.2 12c0 2-3.7 3.6-8.2 3.6S3.8 14 3.8 12 7.5 8.4 12 8.4s8.2 1.6 8.2 3.6Z" />
      <path d="M16.1 19.1c-1.7 1-4.9-1.4-7.1-5.3S6.4 6 8.1 4.9s4.9 1.4 7.1 5.3 2.6 7.8.9 8.9Z" />
      <path d="M7.9 19.1c-1.7-1-.9-5 1.3-8.9s5.4-6.3 7.1-5.3.9 5-1.3 8.9-5.4 6.3-7.1 5.3Z" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12 4.4 7.7" />
      <path d="M12 12v8.6" />
      <path d="m12 12 7.6-4.3" />
    </>
  ),
  brush: (
    <>
      <path d="M14.5 5.5 18 2l4 4-3.5 3.5" />
      <path d="m14.5 5.5-8.8 8.8c-.9.9-.9 2.3 0 3.2s2.3.9 3.2 0l8.8-8.8-3.2-3.2Z" />
      <path d="M3 21c2.6 0 4.2-.6 5.1-1.9" />
    </>
  ),
};

const locationIcons = {
  Remote: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.4 2.5 3.5 5.5 3.5 9S14.4 18.5 12 21" />
      <path d="M12 3C9.6 5.5 8.5 8.5 8.5 12S9.6 18.5 12 21" />
    </>
  ),
  Office: (
    <>
      <path d="M12 21s6-5.3 6-11a6 6 0 0 0-12 0c0 5.7 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  Hybrid: (
    <>
      <path d="M4 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
      <path d="M16 11h2a2 2 0 0 1 2 2v8" />
      <path d="M8 9h1" />
      <path d="M11 9h1" />
      <path d="M8 13h1" />
      <path d="M11 13h1" />
      <path d="M8 17h1" />
      <path d="M11 17h1" />
    </>
  ),
};

const statusIcons = {
  Saved: (
    <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.8L6 21V4.5Z" />
  ),
  Applied: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.2 2.2 4.8-5" />
    </>
  ),
  Interview: (
    <>
      <rect x="5" y="6" width="14" height="13" rx="2" />
      <path d="M8 3v5" />
      <path d="M16 3v5" />
      <path d="M5 10h14" />
    </>
  ),
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      {children}
    </svg>
  );
}

export function JobCard({ job }: { job: JobEntry }) {
  return (
    <article className="job-card">
      <div className="job-identity">
        <div className={`job-icon job-icon-${job.icon}`}>
          <Icon>{iconPaths[job.icon]}</Icon>
        </div>
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
      </div>
      <div className="job-location">
        <Icon>{locationIcons[job.type]}</Icon>
        <span>{job.location}</span>
      </div>
      <span className={`status-pill status-${job.status.toLowerCase()}`}>
        <Icon>{statusIcons[job.status]}</Icon>
        {job.status}
      </span>
      <button className="row-action" type="button" aria-label={`More actions for ${job.title}`}>
        <Icon>
          <circle cx="12" cy="5" r="1.3" fill="currentColor" />
          <circle cx="12" cy="12" r="1.3" fill="currentColor" />
          <circle cx="12" cy="19" r="1.3" fill="currentColor" />
        </Icon>
      </button>
    </article>
  );
}
