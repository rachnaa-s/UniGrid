import Layout from "../components/layout/Layout";
import { SYLLABUS_DATA } from "../data/SyllabusData";

export default function Syllabus() {
  return (
    <Layout>
      <div className="syllabus-page">

        {/* HEADER */}
        <h1>Syllabus</h1>
        <p className="sub-text">
          Browse and download course syllabi for all programs
        </p>

        {/* FILTER */}
        <div className="filter-box">

          <h3>Filter Syllabus</h3>

          <div className="filter-grid">

            <div>
              <label>Program Level</label>
              <select>
                <option>Undergraduate (UG)</option>
              </select>
            </div>

            <div>
              <label>Branch</label>
              <select>
                <option>Computer Science</option>
              </select>
            </div>

            <div>
              <label>Year</label>
              <select>
                <option>1st Year</option>
              </select>
            </div>

          </div>
        </div>

        {/* TITLE */}
        <h2 className="section-title">
          Undergraduate (UG) - Computer Science - 1st Year
        </h2>

        {/* SUBJECT LIST */}
        <div className="syllabus-list">

          {SYLLABUS_DATA.map((sub, i) => (
            <div key={i} className="syllabus-card">

              <div className="left">

                <div className="icon">📄</div>

                <div>
                  <h3>{sub.code}: {sub.name}</h3>

                  <div className="tags">
                    <span className="credit">{sub.credits} Credits</span>
                    <span className={`type ${sub.type.toLowerCase()}`}>
                      {sub.type}
                    </span>
                  </div>

                </div>
              </div>

              <button className="download-btn">
                ⬇ Download
              </button>

            </div>
          ))}

        </div>

        {/* NOTE */}
        <div className="note-box">
          <strong>Note:</strong>
          <p>
            All syllabi are subject to periodic updates. Please check regularly
            for the latest version.
          </p>
        </div>

      </div>
    </Layout>
  );
}