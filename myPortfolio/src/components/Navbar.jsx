import React from "react";
import Contacts from "../pages/Contacts";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navElements = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Experiences", path: "/experiences" },
    { name: "Projects", path: "/projects" },
    { name: "Contacts", path: "/contacts" },
    { name: "Hire me", path: "/" },
  ];

  return (
    <div className="w-full">
      <nav className="flex flex-wrap justify-center md:justify-end items-center p-4 gap-2 md:gap-4">
        {navElements.map((element, index) => (
          <button
            key={index}
            onClick={() => navigate(element.path)}
            className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition duration-200 ${
              element.name === "Hire me"
                ? "text-orange-400 border border-yellow-200 hover:bg-yellow-500"
                : "text-orange-400 hover:underline"
            }`}
          >
            {element.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
