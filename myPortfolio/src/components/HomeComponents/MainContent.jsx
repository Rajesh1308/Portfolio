import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const MainContent = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/rajesharulprakash/",
    github: "https://github.com/Rajesh1308/",
    instagram: "https://www.instagram.com/rajesharulrathna/",
  };

  const summary = [
    {
      head: "Experience",
      count: "2+",
      subHead: "Internships",
    },
    {
      head: "Projects",
      count: "5+",
      subHead: "Personal & Academic",
    },
    {
      head: "Achievements",
      count: "3+",
      subHead: "Awards",
    },
  ];
  return (
    <>
      <main className="px-4 md:px-10 lg:px-30 bg-gradient-to-t from-orange-400 via-yellow-400 to-black pb-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-orange-400 bg-gradient-to-r from-yellow-400 to-orange-400 font-bold h-auto md:h-[85vh] rounded-lg p-6 md:p-10">
          <div className="flex flex-col justify-center text-center md:text-left">
            <div className="text-2xl">I'm</div>
            <div className="text-4xl sm:text-5xl md:text-8xl mb-5">
              Rajesh A
            </div>
            <div className="text-2xl">Full Stack Developer</div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start mt-4">
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <BsLinkedin className="m-2 cursor-pointer" size={30} />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                <BsGithub className="m-2 cursor-pointer" size={30} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                <BsInstagram className="m-2 cursor-pointer" size={30} />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-4">
              <button className="bg-black rounded-md text-yellow-400 px-6 py-3 m-2 min-w-[150px]">
                Download CV
              </button>
              <button className="bg-black rounded-md text-yellow-400 px-6 py-3 m-2 min-w-[150px]">
                Hire Me
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              className="w-full max-w-xs sm:max-w-md md:max-w-lg border border-yellow-400 rounded-3xl object-cover"
              src="/rajFolio-2.png"
              alt="Portfolio Preview"
            />
          </div>
        </div>
      </main>

      {/* Summary Section */}
      <div className="mt-16 px-4 md:px-10 lg:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-yellow-400">
          {summary.map((val, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-black h-44 w-full justify-center transition-transform duration-300 border hover:scale-105 border-orange-500 rounded-lg p-4"
            >
              <div className="font-medium text-lg md:text-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                {val.head}
              </div>
              <p className="text-3xl md:text-4xl mt-2 mb-1 font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-md">
                {val.count}
              </p>
              <p className="tracking-wide text-center text-sm md:text-base">
                {val.subHead}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContent;
