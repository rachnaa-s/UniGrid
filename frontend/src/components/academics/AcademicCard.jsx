import { Link } from "react-router-dom";

export default function AcademicCard({ item }) {
  return (
    <Link to={item.path} className="acad-card">
      <h3>{item.title}</h3>
      <p>Explore {item.title}</p>
    </Link>
  );
}