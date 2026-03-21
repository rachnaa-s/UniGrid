import Layout from "../components/layout/Layout";
import AcademicCard from "../components/academics/AcademicCard";

export default function Academics() {
  const items = [
    { title: "Syllabus", path: "/syllabus" },
    { title: "PYQs", path: "/pyqs" },
    { title: "Notes", path: "/notes" },
    { title: "Research", path: "/research" },
    { title: "E-Library", path: "/library" },
    { title: "Exchange", path: "/exchange" },
  ];

  return (
    <Layout>
      <div className="academics-page">
        <h1>Academics</h1>

        <div className="acad-grid">
          {items.map((item, i) => (
            <AcademicCard key={i} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}