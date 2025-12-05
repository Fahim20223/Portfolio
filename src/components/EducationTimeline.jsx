import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EducationCard = ({
  degree,
  institution,
  duration,
  grade,
  description,
  logo,
  isLeft,
  index,
}) => (
  <motion.div
    className={`flex items-center gap-8 mb-16 ${
      isLeft ? "flex-row" : "flex-row-reverse"
    }`}
    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.6,
      delay: index * 0.2,
      ease: "easeOut",
    }}
  >
    {/* Card */}
    <div
      className={`w-full lg:w-5/12 ${
        isLeft ? "text-left" : "text-right lg:text-left"
      }`}
    >
      <motion.div
        className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm p-6"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header with Logo */}
        <motion.div
          className={`flex items-start gap-4 mb-4 ${
            isLeft ? "" : "lg:flex-row-reverse"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="flex-shrink-0"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logo}
              alt={institution}
              className="w-16 h-16 rounded-lg object-cover border-2 border-gray-700"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/64?text=Logo";
              }}
            />
          </motion.div>
          <div className="flex-1">
            <motion.h3
              className="text-xl font-bold text-white mb-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {degree}
            </motion.h3>
            <motion.p
              className="text-purple-400 font-medium text-sm mb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {institution}
            </motion.p>
            <motion.p
              className="text-gray-500 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {duration}
            </motion.p>
          </div>
        </motion.div>

        {/* Grade */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
              grade.includes("Ongoing")
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-gray-700/50 text-gray-300 border border-gray-600/30"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {grade}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {description}
        </motion.p>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-300 pointer-events-none" />
      </motion.div>
    </div>

    {/* Timeline Dot */}
    <motion.div
      className="hidden lg:flex flex-col items-center flex-shrink-0"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.2 + 0.3,
        type: "spring",
        stiffness: 200,
      }}
    >
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-purple-500 bg-gray-900 flex items-center justify-center z-10"
        whileHover={{ scale: 1.2, rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={logo}
          alt={institution}
          className="w-8 h-8 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/32?text=Logo";
          }}
        />
      </motion.div>
    </motion.div>

    {/* Empty Space for alternating layout */}
    <div className="hidden lg:block w-5/12" />
  </motion.div>
);

const EducationTimeline = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch education data from public/education.json
    fetch("/education.json")
      .then((response) => response.json())
      .then((data) => {
        setEducation(data.education);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading education:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-900 py-20 px-4 flex items-center justify-center">
        <div className="text-white text-xl">Loading education...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            EDUCATION
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
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
            My education has been a journey of learning and development. Here
            are the details of my academic background
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <motion.div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Education Cards */}
          {education.map((edu, index) => (
            <EducationCard
              key={edu.id}
              {...edu}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
