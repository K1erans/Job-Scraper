import "../styles/App.css";
import { type JobEntry } from "../types/Job";
import { JobCard } from "../components/JobCard";
import { navIcons, SvgIcon, type NavIconName } from "../styles/navIcons";

const jobEntries: JobEntry[] = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Northstar Labs",
    location: "Remote",
    icon: "code",
    type: "Remote",
    status: "Saved",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Harbour Tech",
    location: "Manchester",
    icon: "atom",
    type: "Office",
    status: "Applied",
  },
  {
    id: 3,
    title: "Product Engineer",
    company: "Greenfield Systems",
    location: "London",
    icon: "box",
    type: "Office",
    status: "Interview",
  },
  {
    id: 4,
    title: "UI Engineer",
    company: "Atlas Works",
    location: "Hybrid",
    icon: "brush",
    type: "Hybrid",
    status: "Saved",
  },
];

const navItems = [
  { label: "Home", icon: "home" },
  { label: "Applications", icon: "file" },
  { label: "Misc", icon: "grid" },
] satisfies Array<{ label: string; icon: NavIconName }>;

function App() {
  return (
    <main className="app-shell">
      <aside className="side-nav" aria-label="Main navigation">
        <div className="brand">
          <span className="brand-mark">
            <SvgIcon>{navIcons.briefcase}</SvgIcon>
          </span>
          <span>Job Scraper</span>
        </div>

        <div className="profile-nav">
          <div className="profile-picture">
            <span>K</span>
          </div>
          <strong>Kieran</strong>
          <nav className="menu nav-list">
            {navItems.map((item) => (
              <button
                className={`nav-button ${item.label === "Home" ? "is-active" : ""}`}
                key={item.label}
                type="button"
              >
                <SvgIcon>{navIcons[item.icon]}</SvgIcon>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <p className="sidebar-note">
          <SvgIcon>{navIcons.sun}</SvgIcon>
          Keep tracking. Keep growing.
        </p>
      </aside>

      <section className="job-panel" aria-labelledby="jobs-title">
        <header className="section-heading">
          <h1 id="jobs-title">Job Entries</h1>
          <span>{jobEntries.length} Temporary Records</span>
        </header>

        <div className="panel-body">
          <div className="toolbar">
            <label className="search-box">
              <SvgIcon>{navIcons.search}</SvgIcon>
              <input
                type="search"
                placeholder="Search jobs by title, company, or location..."
              />
            </label>

            <button className="filter-button" type="button">
              <SvgIcon>{navIcons.filter}</SvgIcon>
              <span>Filter</span>
              <SvgIcon>{navIcons.chevron}</SvgIcon>
            </button>
          </div>

          <div className="job-table">
            <div className="table-header">
              <span>Job Title &amp; Company</span>
              <span>Location / Type</span>
              <span>Status</span>
            </div>
            <div className="job-list">
              {jobEntries.map((job) => (
                <JobCard job={job} key={job.id} />
              ))}
            </div>

            <footer className="table-footer">
              <span>Showing 1 to 4 of 4 entries</span>
              <div className="pagination" aria-label="Pagination">
                <button type="button" aria-label="Previous page">
                  <SvgIcon>{navIcons.arrowLeft}</SvgIcon>
                </button>
                <button className="is-current" type="button" aria-label="Page 1">
                  1
                </button>
                <button type="button" aria-label="Next page">
                  <SvgIcon>{navIcons.arrowRight}</SvgIcon>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
