import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">UniGrid</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#features">Events</a>
        <a href="#features">Complaints</a>
        <Link to="/academics">Academics</Link>
        <Link to="/community">Community</Link>
        <a href="#features">Sports</a>
        
      </div>

      <button className="login-btn">Login</button>
      <button className="sign-in-btn">Sign in</button>
    </nav>
  );
}