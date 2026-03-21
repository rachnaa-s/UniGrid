import Layout from "../components/layout/Layout";
import { STATS, FOCUS, PUBLICATIONS } from "../data/researchData";
import hero from "../assets/library.png"; // use any image

export default function Research() {
  return (
    <Layout>
      <div className="research-page">

        {/* HEADER */}
        <h1>Academic Research</h1>
        <p className="sub-text">
          Pioneering research and innovation across disciplines
        </p>

        {/* HERO */}
        <img src={hero} className="research-hero" />

        {/* STATS */}
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-card">
              <h2>{s.value}</h2>
              <p>{s.title}</p>
            </div>
          ))}
        </div>

        {/* FOCUS */}
        <h2 className="section-title">Research Focus Areas</h2>

        <div className="focus-grid">
          {FOCUS.map((f, i) => (
            <div key={i} className="focus-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>

              <div className="tags">
                <span className="faculty">{f.faculty} Faculty</span>
                <span className="pub">{f.publications} Publications</span>
              </div>
            </div>
          ))}
        </div>

        {/* PUBLICATIONS */}
        <h2 className="section-title">Recent Publications</h2>

        <div className="pub-list">
          {PUBLICATIONS.map((p, i) => (
            <div key={i} className="pub-card">
              <div>
                <h3>{p.title}</h3>
                <p>{p.author}</p>
                <p>
                  {p.journal} • {p.year} • Citations: {p.citations}
                </p>
              </div>

              <button className="open-btn">↗</button>
            </div>
          ))}
        </div>

        {/* OPPORTUNITIES */}
        <div className="opportunity-box">
          <h2>Research Opportunities</h2>

          <h4>For Students</h4>
          <ul>
            <li>Summer internships</li>
            <li>Research assistant roles</li>
            <li>Final year projects</li>
          </ul>

          <h4>For Faculty</h4>
          <ul>
            <li>Seed grants</li>
            <li>Collaborations</li>
            <li>Conference support</li>
          </ul>

          <button className="apply-btn">
            Apply for Research Programs
          </button>
        </div>

      </div>
    </Layout>
  );
}