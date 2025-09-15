import React from "react";

const SkillsContent = () => {
  const skills = [
    "Javascript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "Flask",
    "Django",
    "Bootstrap",
    "Tailwind",
    "RabbitMQ",
    "Docker",
    "AWS",
    "Git",
    "Github",
    "Github-Actions",
  ];
  return (
    <div className="mx-4 md:mx-20">
      <div className="px-4 md:px-20 mt-10 md:mt-20">
        <div className="text-3xl md:text-4xl mt-3 mb-1 md:ml-20 font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent inline-block">
          Skills
        </div>
        <hr className="border-t-2 border-yellow-400 my-4" />

        <div className="flex flex-wrap justify-center md:justify-start">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="text-black text-sm md:text-base font-semibold rounded-full px-4 py-2 m-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
