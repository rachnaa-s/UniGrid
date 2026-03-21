import Layout from "../components/layout/Layout";
import { useState } from "react";

export default function PYQs() {
  const [branch, setBranch] = useState("Computer Science");
  const [year, setYear] = useState("1st Year");

  return (
    <Layout>
      <div className="pyq-page">

        {/* HEADER */}
        <h1>Previous Year Question Papers</h1>
        <p className="sub-text">
          Access previous year question papers for exam preparation
        </p>

        {/* FILTER BOX */}
        <div className="filter-box">

          <h3>Filter Question Papers</h3>

          <div className="filter-grid">

            <div>
              <label>Program Level</label>
              <select>
                <option>Undergraduate (UG)</option>
              </select>
            </div>

            <div>
              <label>Branch</label>
              <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                <option>Computer Science</option>
                <option>IT</option>
                <option>Mechanical</option>
              </select>
            </div>

            <div>
              <label>Year</label>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option>1st Year</option>
                <option>2nd Year</option>
              </select>
            </div>

            <div>
              <label>Academic Year</label>
              <select>
                <option>2025-26</option>
                <option>2024-25</option>
              </select>
            </div>

          </div>
        </div>

        {/* RESULTS */}
        <div className="results">

          <h2>Available Question Papers</h2>
          <p className="sub-text">
            Showing 0 question papers for {branch} - {year}
          </p>

          {/* EMPTY STATE */}
          <div className="empty-box">
            <div className="icon">📄</div>
            <h3>No Question Papers Found</h3>
            <p>Try adjusting your filters to find question papers.</p>
          </div>

        </div>

        {/* TIPS */}
        <div className="tips-box">
          <h3>Exam Preparation Tips:</h3>
          <ul>
            <li>Review multiple years of question papers</li>
            <li>Practice time management</li>
            <li>Focus on important topics</li>
            <li>Verify answers with course material</li>
          </ul>
        </div>

      </div>
    </Layout>
  );
}