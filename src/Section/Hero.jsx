import { useState } from "react";
import { Card } from "../components/card";
import { Link } from "react-router-dom";

import { Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react';

const projects = [
  {
    title: "The simplest example is kafka + golang",
    description:
      "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
    image:
      "https://images.unsplash.com/photo-1674574129327-34b93a9f5a2b?ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Building Scalable APIs",
    description:
      "A guide to building fast and reliable APIs with Node.js, Express, and PostgreSQL.",
    image:
      "https://images.unsplash.com/photo-1675262824134-d29d58a3c2db?ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Modern UI/UX with React",
    description:
      "Learn how to design and implement modern user interfaces with React and TailwindCSS.",
    image:
      "https://images.unsplash.com/photo-1664575605139-9d3ff4466f8b?ixlib=rb-4.0.3",
    link: "#",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      {/* Headline */}
      <div className="text-center max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-4 items-center md:items-start md:gap-10">
          {/* Top Row (Title + Button) */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-6">
            <h1 className="text-4xl md:text-8xl font-bold text-center md:text-left">
              Full-stack <span className="italic block md:inline">Developer</span>
            </h1>

            {/* Projects Button — Desktop only */}
            <div className="mt-4 md:mt-8 hidden md:flex">
              <Link to="/projects">
                <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                  Projects →
                </button>
              </Link>
            </div>

          </div>

          {/* Paragraph + UI/UX Designer (stacked on mobile) */}
          <div className="flex flex-col-reverse md:flex-row gap-10 w-full items-center md:items-start justify-between">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-base md:text-lg text-gray-300 text-center md:text-left max-w-sm">
                My goal is to <span className="italic">write maintainable, clean</span> and <span className="italic">understandable code</span> so that process development is enjoyable.
              </p>

              {/* Mobile Projects Button — only visible on mobile */}
              <div className="mt-6 flex md:hidden">
                <Link to="/projects">
                  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                    Projects →
                  </button>
                </Link>
              </div>
            </div>


            <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left">
              <span className="block md:inline">&</span> UI/UX Designer
            </h1>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        {[
          { name: "Github", icon: <Github className="w-4 h-4" /> },
          { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
          { name: "Telegram", icon: <Send className="w-4 h-4" /> },
          { name: "Facebook", icon: <Facebook className="w-4 h-4" /> },
          { name: "Instagram", icon: <Instagram className="w-4 h-4" /> }
        ].map((social) => (
          <a
            key={social.name}
            href="#"
            className="flex items-center gap-2 px-5 py-2 border border-gray-600 rounded-full hover:bg-gray-800 transition"
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative mt-16 w-full max-w-4xl flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
        >
          ←
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 flex justify-center">
                <Card {...project} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
        >
          →
        </button>
      </div>
    </section>
  );
}

