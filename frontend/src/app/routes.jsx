import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Academics from "../pages/Academics";
import Syllabus from "../pages/Syllabus";
import PYQs from "../pages/PYQs";
import Notes from "../pages/Notes";
import Research from "../pages/Research";
import Library from "../pages/Library";
import Exchange from "../pages/Exchange";
import Community from "../pages/community/Community";
import CommunityDetail from "../pages/community/CommunityDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/pyqs" element={<PYQs />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/research" element={<Research />} />
      <Route path="/library" element={<Library />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/:id" element={<CommunityDetail />} />
      
    </Routes>
  );
}