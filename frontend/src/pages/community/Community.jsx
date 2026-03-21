
import React from "react";
import { useNavigate } from "react-router-dom";


const communities = [
  { id: 1, name: "Tech & Coding 💻", desc: "Discuss coding, projects, bugs" },
  { id: 2, name: "Placements 🚀", desc: "Internships, interviews, companies" },
  { id: 3, name: "College Life 🎓", desc: "Campus, hostel, events" },
  { id: 4, name: "Research 🔬", desc: "Papers, innovation, ideas" },
  { id: 5, name: "Startups 💡", desc: "Ideas, funding, business" },
  { id: 6, name: "Random Talks 😄", desc: "Memes, fun, general chats" },
];

export default function Community() {
  const navigate = useNavigate();

  return (
    <div className="community-container">
      <h1>Communities</h1>
      <p>Join discussions, ask questions, share ideas</p>

      <div className="community-grid">
        {communities.map((c) => (
          <div
            key={c.id}
            className="community-card"
            onClick={() => navigate(`/community/${c.id}`)}
          >
            <h3>{c.name}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}