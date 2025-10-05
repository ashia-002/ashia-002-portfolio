import React from "react";
import { motion } from "framer-motion";
import { Globe, Youtube, Instagram } from "lucide-react";
import { SiBehance, SiDribbble } from "react-icons/si";
import Profile from "../assets/Ashia.jpg"

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 flex flex-col items-center gap-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-center"
      >
        <h2 className="flex-1 text-xl md:text-lg font-bold mb-10">.../About me ...</h2>
      </motion.h1>

      {/* Profile + Summary */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 max-w-5xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden w-52 h-52 md:w-60 md:h-60 border border-white/20 shadow-lg"
        >
          <img
            src= {Profile} // replace with your image path
            alt="Ashia Sultana"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ashia Sultana</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            I’m a multidisciplinary <span className="text-white font-semibold">Web Developer</span> and{" "}
            <span className="text-white font-semibold">UI/UX Designer</span> with a passion for
            creating beautiful, functional, and user-focused digital experiences. 
            I specialize in full-stack web and app development — combining design thinking
            with solid backend architecture to bring ideas to life.
          </p>
        </motion.div>
      </div>

      {/* Experience & Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mt-12">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-md"
        >
          <h3 className="text-lg font-semibold mb-6 tracking-wide">EXPERIENCE</h3>
          <div className="space-y-5 text-gray-300">
            <div>
              <p className="font-semibold text-white">2024 – Present</p>
              <p className="text-white">Full Stack Developer</p>
              <p className="text-sm text-gray-400">Freelance / Personal Projects</p>
            </div>
            <div>
              <p className="font-semibold text-white">2023 – Present</p>
              <p className="text-white">UI/UX Designer & Frontend Developer</p>
              <p className="text-sm text-gray-400">Freelance / Part-time Job</p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-md"
        >
          <h3 className="text-lg font-semibold mb-6 tracking-wide">EDUCATION</h3>
          <div className="space-y-5 text-gray-300">
            <div>
              <p className="font-semibold text-white">2021 – Present</p>
              <p className="text-white">Bachelor’s in Computer Science & Engineering</p>
              <p className="text-sm text-gray-400">Ranada Prashad Shaha University</p>
            </div>
            <div>
              <p className="font-semibold text-white">2022 – Present</p>
              <p className="text-white">Professional UI/UX Design Training</p>
              <p className="text-sm text-gray-400">Self-Paced Learning / Courses</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Portfolio Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center md:items-center justify-between gap-6"
      >
        <h3 className="text-lg font-semibold flex items-center gap-2">
          Portfolio <span className="text-gray-400 text-xl">››</span>
        </h3>

        <div className="flex flex-wrap gap-4 justify-center">
          {[
            {
              name: "Website",
              icon: <Globe className="w-5 h-5 text-blue-400" />,
              link: "https://ashia-002-portfolio.vercel.app/",
            },
            {
              name: "Behance",
              icon: <SiBehance className="w-5 h-5 text-blue-500" />,
              link: "https://behance.net/",
            },
            {
              name: "Dribbble",
              icon: <SiDribbble className="w-5 h-5 text-pink-500" />,
              link: "https://dribbble.com/ashia002",
            },
            {
              name: "Instagram",
              icon: <Instagram className="w-5 h-5 text-violet-500" />,
              link: "https://www.instagram.com/ux_ui_alchemystudio/",
            },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
