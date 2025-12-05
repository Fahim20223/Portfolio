import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/ContactForm";
import EducationTimeline from "./components/EducationTimeline";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 font-display">
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/20 to-transparent dark:from-primary/30 dark:to-transparent opacity-50 dark:opacity-100"></div>
      <Header />
      <div className="relative z-10">
        <section id="about">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <EducationTimeline />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default App;
