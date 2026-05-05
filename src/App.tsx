import "./App.css";
import { type JobEntry } from "./types/Job";
import { JobCard } from "./components/JobCard";

const jobEntries: JobEntry[] = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Northstar Labs",
    location: "Remote",
    status: "Saved",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Harbour Tech",
    location: "Manchester",
    status: "Applied",
  },
  {
    id: 3,
    title: "Product Engineer",
    company: "Greenfield Systems",
    location: "London",
    status: "Interview",
  },
  {
    id: 4,
    title: "UI Engineer",
    company: "Atlas Works",
    location: "Hybrid",
    status: "Saved",
  },
];

const navItems = ["Home", "Applications", "Misc"];

function App() {
  return (
    <main className="app-shell">
      <header className="site-header">
        <p>Job Scraper</p>
      </header>

      <aside className="side-nav" aria-label="Main navigation">
        <div className="profile-nav">
          <div className="avatar avatar-placeholder profile-picture">
            <div></div>
          </div>
          <nav className="menu nav-list">
            {navItems.map((item) => (
              <button
                className={
                  item === "Home"
                    ? "btn btn-neutral btn-sm nav-button"
                    : "btn btn-outline btn-sm nav-button"
                }
                key={item}
                type="button"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <section className="job-panel" aria-labelledby="jobs-title">
        <header className="section-heading">
          <h2 id="jobs-title">Job entries</h2>
          <span>{jobEntries.length} temporary records</span>
        </header>

        <div className="job-list">
          {jobEntries.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
