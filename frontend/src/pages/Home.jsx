import Layout from "../components/layout/layout";
import heroImg from "../assets/banner.png";
 import { BookOpen, FileText, Search, Users, Globe } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <section className="hero">

        <img src={heroImg} className="hero-img" />

        {/* DARK OVERLAY */}
        <div className="overlay"></div>

        {/* CENTER CONTENT */}
        <div className="hero-content">
          <h1>Welcome to UniGrid</h1>
          <p>
            One platform for your entire campus life. Connect, collaborate, grow.
          </p>

          <div className="hero-buttons">
            <a href="#quick-access">
              <button className="explore-btn">Explore</button>
            </a>

          </div>
          <section id="quick-access" className="quick-access"></section>
        </div>
      </section>

     
<section className="quick-access">
  <h2>Your Digital Campus</h2>
  <p>Everything you need to succeed</p>

  <div className="qa-grid">

    <div className="qa-card">
      <div className="icon blue">
        <BookOpen size={24} />
      </div>
      <h3>Syllabus</h3>
      <p>Access syllabus for all programs</p>
    </div>

    <div className="qa-card">
      <div className="icon green">
        <FileText size={24} />
      </div>
      <h3>Previous Year Questions</h3>
      <p>Download PYQs for exam preparation</p>
    </div>

    <div className="qa-card">
      <div className="icon orange">
        <Search size={24} />
      </div>
      <h3>Lost Property</h3>
      <p>Report or search lost items</p>
    </div>

    <div className="qa-card">
      <div className="icon purple">
        <Users size={24} />
      </div>
      <h3>Academic Research</h3>
      <p>Explore research opportunities</p>
    </div>

    <div className="qa-card">
      <div className="icon pink">
        <Globe size={24} />
      </div>
      <h3>Exchange Student</h3>
      <p>Information about exchange programs</p>
    </div>

  </div>
</section>
<section className="programs">
  <h2>Our Programs</h2>
  <p>Discover a wide range of academic programs across multiple disciplines</p>

  <div className="program-grid">

    <div className="program-card">
      🎓
      <h3>Undergraduate</h3>
      <span>50+ Programs</span>
    </div>

    <div className="program-card">
      🎓
      <h3>Postgraduate</h3>
      <span>30+ Programs</span>
    </div>

    <div className="program-card">
      🎓
      <h3>Doctoral</h3>
      <span>15+ Programs</span>
    </div>

  </div>
</section>
<section className="branches">
  <h2>Academic Branches</h2>

  <div className="branch-list">
    <button>Computer Science</button>
    <button>Information Technology</button>
    <button>Electronics & Telecommunication</button>
    <button>Mechanical Engineering</button>
    <button>AI & Data Science</button>
    <button>CS(Business Systems)</button>
    <button>Law</button>
    <button>MBA</button>
    <button>Pharmacy</button>
    <button>Forensic Science</button>
    <button>Biotechnology</button>
    <button>Civil Engineering</button>


  </div>
</section>
<section className="image-section">

  <div className="image-card">
    <img src="/src/assets/library.png" alt="library" />
  </div>

  <div className="image-card">
    <img src="/src/assets/background.jpg" alt="graduation" />
  </div>

</section>
    </Layout>
  );
  
}