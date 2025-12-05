import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tags, github, demo, index }) => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
    }}
    whileHover={{ y: -10, scale: 1.02 }}
  >
    <div className="p-6">
      {/* Project Image */}
      <motion.div
        className="mb-6 rounded-lg overflow-hidden bg-gray-800/80"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop";
          }}
        />
      </motion.div>

      {/* Project Title */}
      <motion.h3
        className="text-2xl font-bold text-white mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Project Description */}
      <motion.p
        className="text-gray-400 text-sm leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {description}
      </motion.p>

      {/* Technology Tags */}
      <motion.div
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {tags.map((tag, tagIndex) => (
          <motion.span
            key={tagIndex}
            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 + tagIndex * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex gap-3 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-sm font-medium text-center text-white bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-600/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        )}
        {demo && (
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-sm font-medium text-center text-white bg-purple-600/80 hover:bg-purple-600 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
        )}
      </motion.div>
    </div>

    {/* Hover Effect Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-300 pointer-events-none" />
  </motion.div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects data from public/projects.json
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load projects data");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4 flex items-center justify-center">
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4 flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-4 relative inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            PROJECTS
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
