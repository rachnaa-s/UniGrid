import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">UniGrid</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#features">Events</a>
        <a href="#features">Complaints</a>
        <a href="#features">Academics</a>
        <a href="#features">Community</a>
        <a href="#features">Alumni</a>
        <a href="#features">Sports</a>
        <a href="#features">Lost & Found</a>
      </div>

      <button className="login-btn">Login</button>
      <button className="sign-in-btn">Sign in</button>
    </nav>
  );
}