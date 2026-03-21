import { Link } from "react-router-dom";

const branches = [
  "CSE",
  "IT",
  "Mechanical",
  "Electronics",
  "AI & DS",
];

export default function BranchList({ basePath }) {
  return (
    <div className="branch-list">
      {branches.map((b, i) => (
        <Link key={i} to={`${basePath}/${b}`} className="branch-card">
          {b}
        </Link>
      ))}
    </div>
  );
}