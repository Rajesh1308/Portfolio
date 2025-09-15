import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/HomeComponents/MainContent";
import SkillsContent from "../components/HomeComponents/SkillsContent";
import ProjectsContent from "../components/HomeComponents/ProjectsContent";

const Home = () => {
  return (
    <div className="bg-black-500">
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <MainContent />
      {/* Overviews */}
      <SkillsContent />
      {/* Projects */}
      <ProjectsContent />
      {/* Footer */}
    </div>
  );
};

export default Home;
