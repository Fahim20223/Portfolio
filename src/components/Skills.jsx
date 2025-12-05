import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    frontend: [
      // {
      //   name: "JavaScript",
      //   icon: "⚡",
      //   color: "from-yellow-500 to-yellow-600",
      // },
      { name: "HTML", icon: "🌐", color: "from-orange-500 to-orange-600" },
      { name: "CSS", icon: "🎨", color: "from-blue-500 to-blue-600" },
      // { name: "SASS", icon: "💅", color: "from-pink-500 to-pink-600" },
      {
        name: "JavaScript",
        icon: "⚡",
        color: "from-yellow-500 to-yellow-600",
      },
      { name: "React JS", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
      // { name: "Angular", icon: "🅰️", color: "from-red-500 to-red-600" },
      // { name: "Redux", icon: "🔄", color: "from-purple-500 to-purple-600" },
      { name: "Next JS", icon: "▲", color: "from-gray-700 to-gray-800" },
      { name: "Tailwind CSS", icon: "🌊", color: "from-teal-500 to-teal-600" },
      // { name: "GSAP", icon: "🚀", color: "from-green-500 to-green-600" },
      // { name: "Material UI", icon: "📦", color: "from-blue-600 to-blue-700" },
      // { name: "Bootstrap", icon: "🅱️", color: "from-purple-600 to-purple-700" },
    ],
    backend: [
      // { name: "Springboot", icon: "🍃", color: "from-green-500 to-green-600" },
      { name: "Node JS", icon: "📗", color: "from-green-600 to-green-700" },
      { name: "Express JS", icon: "🚂", color: "from-gray-600 to-gray-700" },
      // { name: "MySQL", icon: "🐬", color: "from-blue-500 to-blue-600" },
      {
        name: "NoSQL",
        icon: "📊",
        color: "from-indigo-500 to-purple-600",
      },
      { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-600" },
      { name: "Firebase", icon: "🔥", color: "from-yellow-500 to-orange-600" },
      // { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-700" },
    ],
    languages: [
      // { name: "C", icon: "©️", color: "from-blue-500 to-blue-600" },
      // { name: "C++", icon: "➕", color: "from-blue-600 to-blue-700" },
      // { name: "Java", icon: "☕", color: "from-red-500 to-red-600" },
      // { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-600" },
      // { name: "C-Sharp", icon: "#️⃣", color: "from-purple-500 to-purple-600" },
      {
        name: "JavaScript",
        icon: "⚡",
        color: "from-yellow-500 to-yellow-600",
      },
      // { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-600" },
    ],
    tools: [
      { name: "Git", icon: "🔱", color: "from-orange-500 to-orange-600" },
      { name: "GitHub", icon: "🐙", color: "from-gray-700 to-gray-800" },
      { name: "VS Code", icon: "💻", color: "from-blue-500 to-blue-600" },
      { name: "Postman", icon: "📮", color: "from-orange-500 to-orange-600" },
      // { name: "Compass", icon: "🧭", color: "from-green-500 to-green-600" },
      { name: "Vercel", icon: "▲", color: "from-gray-700 to-gray-800" },
      { name: "Netlify", icon: "🌐", color: "from-teal-500 to-teal-600" },
      { name: "Figma", icon: "🎨", color: "from-purple-500 to-pink-500" },
    ],
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <motion.div
        className={`bg-gradient-to-br ${skill.color} p-3 rounded-xl shadow-lg cursor-pointer`}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            className="text-2xl"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {skill.icon}
          </motion.span>
          <span className="text-white font-semibold text-sm">{skill.name}</span>
        </div>
      </motion.div>
    </motion.div>
  );

  const Section = ({ title, skills, delay = 0 }) => (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.h2
        className="text-2xl font-bold text-gray-200 mb-6 text-center"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            SKILLS
            <motion.div
              className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A collection of my technical skills and expertise honed through
            various projects and experiences
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Section title="Frontend" skills={skills.frontend} delay={1} />
          <Section title="Backend" skills={skills.backend} delay={2} />
          <Section title="Languages" skills={skills.languages} delay={3} />
          <Section title="Tools" skills={skills.tools} delay={4} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
