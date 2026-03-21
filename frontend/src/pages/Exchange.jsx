import React from "react";


const universities = [
  {
    name: "University of Toronto",
    country: "Canada",
    img: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    name: "University of Oxford",
    country: "UK",
    img: "https://images.unsplash.com/photo-1581091215367-59ab6b64b2c3",
  },
  {
    name: "NUS",
    country: "Singapore",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

const programs = [
  {
    title: "Semester Exchange",
    desc: "Study abroad with full academic credit transfer",
  },
  {
    title: "Summer School",
    desc: "Short-term global exposure programs",
  },
  {
    title: "Research Internship",
    desc: "Collaborate on international research projects",
  },
  {
    title: "Dual Degree",
    desc: "Earn degrees from two universities",
  },
  {
    title: "Cultural Exchange",
    desc: "Experience global cultures and diversity",
  },
];

const Exchange = () => {
  return (
    <div className="exchange-container">

      <div className="exchange-header">
        <h1>Student Exchange Program 🌍</h1>
        <p>Unlock global opportunities and build your international profile</p>
      </div>

      {/* Universities */}
      <h2 className="section-title">Partner Universities</h2>
      <div className="uni-grid">
        {universities.map((uni, index) => (
          <div className="uni-card" key={index}>
            <img src={uni.img} />
            <h3>{uni.name}</h3>
            <p>{uni.country}</p>
          </div>
        ))}
      </div>

      {/* Programs */}
      <h2 className="section-title">Programs Offered</h2>
      <div className="program-grid">
        {programs.map((p, index) => (
          <div className="program-card" key={index}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* WHY JOIN */}
      <div className="why-join">
        <h2>Why Should You Join?</h2>

        <div className="why-grid">
          <div className="why-card">
            🌍 Global Exposure
            <p>Experience international education and culture</p>
          </div>

          <div className="why-card">
            🎓 Top Universities
            <p>Study at world-ranked institutions</p>
          </div>

          <div className="why-card">
            🚀 Career Growth
            <p>Boost your resume with global experience</p>
          </div>

          <div className="why-card">
            🤝 Networking
            <p>Connect with international students & faculty</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Start Your Global Journey ✈️</h2>
        <button>Apply Now</button>
      </div>

    </div>
  );
};

export default Exchange;