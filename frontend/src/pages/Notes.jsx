import Layout from "../components/layout/Layout";
import { NOTES_DATA } from "../data/NotesData";

export default function Notes() {
  return (
    <Layout>
      <div className="notes-page">

        {/* HEADER */}
        <h1>Notes</h1>
        <p className="sub-text">
          Browse and download subject notes for all programs
        </p>

        {/* FILTER */}
        <div className="filter-box">

          <h3>Filter Notes</h3>

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
                <option>2nd Year</option>
              </select>
            </div>

          </div>
        </div>

        {/* TITLE */}
        <h2 className="section-title">
          Undergraduate (UG) - Computer Science - 2nd Year
        </h2>

        {/* NOTES LIST */}
        <div className="syllabus-list">

          {NOTES_DATA.map((note, i) => (
            <div key={i} className="syllabus-card">

              <div className="left">

                <div className="icon">📘</div>

                <div>
                  <h3>{note.code}: {note.name}</h3>

                  <div className="tags">
                    <span className="credit">{note.credits} Credits</span>
                    <span className={`type ${note.type.toLowerCase()}`}>
                      {note.type}
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
            Notes are provided for academic assistance. Always verify with official material.
          </p>
        </div>

      </div>
    </Layout>
  );
}