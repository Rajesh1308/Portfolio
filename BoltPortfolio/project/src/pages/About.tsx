import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";

const About: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "RecurGrow",
      period: "May 2025 - Present",
      description:
        "Worked on full-stack solutions for AI-driven sales automation, including API development, caching (SWR), and Flask-based email tracking. Built automation pipelines, tested APIs with pytest, and streamlined deployments by managing CI/CD workflows on AWS EC2.",
    },
    {
      title: "Software Developer Intern",
      company: "The Yellow Network",
      period: "Feb 2025 - April 2025",
      description:
        "Collaborated with founders to build a PaaS application, integrating RESTful APIs with Django & PostgreSQL, adding new features, and ensuring stability through testing, bug fixes, and Jest-based unit tests.",
    },
    {
      title: "IoT Squad Lead",
      company: "GCT IEEE SB 81571",
      period: "Feb 2024 - Feb 2025",
      description:
        "Led a 10+ member team in building an IoT-based smart orthotic device for real-time gait analysis, developing a Flask + socket.io backend for live data streaming, and deploying scalable, secure infrastructure on AWS ECS Fargate.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Government College of Technology, Coimbatore",
      period: "Oct 2021 - April 2025",
      description: "",
      grading: "CGPA",
      score: "8.04/10",
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution:
        "Sree Dharmasastha Matriculation Higher Secondary School, Coimbatore",
      period: "July 2019 - June 2021",
      description:
        "Topper of the group with 96.33 percentage, and topper of Computer Science.",
      grading: "Percentage",
      score: "96.33%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-black dark:via-gray-900 dark:to-black pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a curious full-stack developer who loves bringing ideas to life
            with code. From building APIs and automations to experimenting with
            cloud and IoT, I enjoy turning everyday challenges into smart,
            usable solutions. For me, debugging isn't just fixing errors - it's
            solving puzzles that make technology click
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <ParallaxSection speed={0.2}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20"
            >
              <div className="flex items-center mb-8">
                <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Experience
                </h2>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="border-l-2 border-blue-600 dark:border-blue-400 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-300 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ParallaxSection>

          {/* Education Section */}
          <ParallaxSection speed={0.3}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20"
            >
              <div className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Education
                </h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="border-l-2 border-cyan-600 dark:border-cyan-400 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-600 dark:bg-cyan-400 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-300 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.grading}: {edu.score}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ParallaxSection>
        </div>

        {/* Achievements */}
        <ParallaxSection speed={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20"
          >
            <div className="flex items-center mb-8 justify-center">
              <Award className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Key Achievements
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-hover">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  2+
                </div>
                <p className="text-gray-700 dark:text-white">Internships</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-hover">
                <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                  6+
                </div>
                <p className="text-gray-700 dark:text-white">
                  Courses & Badges
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-hover">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  3+
                </div>
                <p className="text-gray-700 dark:text-white">Awards</p>
              </motion.div>
            </div>
          </motion.div>
        </ParallaxSection>
      </div>
    </div>
  );
};

export default About;
