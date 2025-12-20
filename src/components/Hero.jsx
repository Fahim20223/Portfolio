import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-4xl sm:text-5xl font-semibold text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I am
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-7xl font-bold text-white mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Md Fahim Shahrier
            </motion.h1>
            <motion.p
              className="text-3xl sm:text-4xl mt-4 text-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I am a{" "}
              <span className="text-primary font-semibold">
                Full Stack Developer
              </span>
            </motion.p>
            <motion.p
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I am a dedicated Web Developer specializing in the MERN stack,
              with a strong focus on building responsive, scalable, and
              user-centric applications. I enjoy creating clean interfaces,
              integrating APIs, and developing full-stack features that solve
              real problems. I’m always improving my skills and staying updated
              with modern web technologies to deliver high-quality work.
            </motion.p>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1AMIEVMc3uIIdnO8N1cVlbNJ9ZpqNtA_9"
              download="Fahim_Shahrier_Resume.pdf"
              className="mt-8 inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-primary/30 dark:shadow-glow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary rounded-full shadow-glow"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <img
                alt="Profile picture of Fahim Shahrier"
                className="relative w-full h-full object-cover rounded-full p-2 bg-background-purple dark:bg-background-dark"
                src="https://i.ibb.co.com/DfQRQ63s/487832479-1199995751557987-8157551758610743418-n-removebg-preview.jpg"
              />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
