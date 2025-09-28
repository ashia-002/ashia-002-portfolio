import { useState, useEffect } from "react";
import { Card } from "../components/card";
import { Link } from "react-router-dom";
import webDes from '../assets/devweb.png'
import appDesign from '../assets/desapp.jpg'
import ux from '../assets/Ux.jpg'
import dev from '../assets/dev.jpg'
import webdev from '../assets/webdev.jpg'

import { Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react';
import Carousel from "../components/carousel";
import { motion } from "framer-motion";

const skills = [
  {
    title: "App Design",
    description: "Designing modern mobile app interfaces that are user-friendly and visually appealing.",
    image: webDes
  },
  {
    title: "Web Design",
    description: "Crafting responsive and elegant website layouts with a focus on usability.",
    image: appDesign
  },
  {
    title: "UI/UX",
    description: "Creating seamless user experiences backed by strong UI principles and user research.",
    image: ux
  },
  {
    title: "Web Development",
    description: "Building scalable, interactive, and high-performance web applications.",
    image: webdev
  },
  {
    title: "Backend Development",
    description: "Developing secure and efficient APIs and server-side logic for web & mobile apps.",
    image: dev
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.19,   // A bit slower for better effect
      delayChildren: 0.2,      // Slightly longer initial delay
      when: "beforeChildren",  // Animate container first
      ease: "easeOut",         // Smooth easing for fade-in
      duration: 0.5            // Fade-in duration for container
    }
  }
};


export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? skills.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === skills.length - 1 ? 0 : prev + 1
    );
  };

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-black flex items-center justify-center">
  //       <motion.div
  //         animate={{
  //           scale: [1, 1.2, 1],
  //           rotate: [0, 180, 360]
  //         }}
  //         transition={{
  //           duration: 2,
  //           repeat: Infinity,
  //           ease: "easeInOut"
  //         }}
  //         className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
  //       />
  //     </div>
  //   );
  // }

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20"
    >
      {/* Headline */}
      <div className="text-center max-w-6xl mx-auto w-full">
        <motion.div 
          variants={containerVariants}
          className="flex flex-col gap-4 items-center md:items-start md:gap-10"
        >
          {/* Top Row (Title + Button) */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-6"
          >
            <motion.h1 
              variants={slideInLeft}
              className="text-4xl md:text-8xl font-bold text-center md:text-left"
            >
              Full-stack <motion.span 
                variants={itemVariants}
                className="italic block md:inline"
              >
                Developer
              </motion.span>
            </motion.h1>

            {/* Projects Button — Desktop only */}
            <motion.div 
              variants={slideInRight}
              className="mt-4 md:mt-8 hidden md:flex"
            >
              <Link to="/projects">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition"
                >
                  Projects →
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Paragraph + UI/UX Designer (stacked on mobile) */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col-reverse md:flex-row gap-10 w-full items-center md:items-start justify-between"
          >
            <motion.div 
              variants={slideInLeft}
              className="flex flex-col items-center md:items-start"
            >
              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg text-gray-300 text-center md:text-left max-w-sm"
              >
                My goal is to <span className="italic">write maintainable, clean</span> and <span className="italic">understandable code</span> so that process development is enjoyable.
              </motion.p>

              {/* Mobile Projects Button — only visible on mobile */}
              <motion.div 
                variants={itemVariants}
                className="mt-6 flex md:hidden"
              >
                <Link to="/projects">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition"
                  >
                    Projects →
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.h1 
              variants={slideInRight}
              className="text-4xl md:text-7xl font-bold text-center md:text-left"
            >
              <motion.span 
                variants={itemVariants}
                className="block md:inline"
              >
                & UI/UX Designer
              </motion.span>
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        {[
          { name: "Github", icon: <Github className="w-4 h-4" /> },
          { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
          { name: "Telegram", icon: <Send className="w-4 h-4" /> },
          { name: "Facebook", icon: <Facebook className="w-4 h-4" /> },
          { name: "Instagram", icon: <Instagram className="w-4 h-4" /> }
        ].map((social, index) => (
          <motion.a
            key={social.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-2 px-5 py-2 border border-gray-600 rounded-full hover:bg-gray-800 transition"
          >
            {social.icon}
            {social.name}
          </motion.a>
        ))}
      </motion.div>

      {/* Carousel */}
      <Carousel skills={skills} />
  
    </motion.section>
  );
}