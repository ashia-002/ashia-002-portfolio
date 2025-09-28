import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectShowcase = ({ title, tags, description, images, link }) => {
  const [current, setCurrent] = useState(0);

  // Navigation handlers for mobile
  const nextImage = () => {
    if (images?.mockups) {
      setCurrent((prev) => (prev + 1) % images.mockups.length);
    }
  };
  const prevImage = () => {
    if (images?.mockups) {
      setCurrent((prev) =>
        prev === 0 ? images.mockups.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="relative bg-black text-white py-12 px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 overflow-hidden">

      {/* Right Images */}
      <div className="relative flex-1 flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[550px] w-full">

        {/* MOBILE: Floating stays absolute */}
        {images?.floating && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 
                       w-28 h-28 sm:w-32 sm:h-32 md:hidden 
                       rounded-2xl overflow-hidden shadow-lg border-2 border-white/20"
          >
            <img
              src={images.floating}
              alt={`${title} floating`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        )}

        {/* MOBILE: Slider */}
        <div className="relative flex items-center justify-center w-full md:hidden">
          <button
            onClick={prevImage}
            className="absolute left-2 z-30 p-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-48 sm:w-56 rounded-xl shadow-2xl overflow-hidden"
          >
            <img
              src={images?.mockups?.[current]}
              alt={`${title} screen ${current + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <button
            onClick={nextImage}
            className="absolute right-2 z-30 p-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* DESKTOP: Grid Layout with floating on LEFT */}
        <div className="hidden md:flex items-start gap-6 mt-12 ml-12">
          {/* Floating on the left side */}
          {images?.floating && (
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 flex-shrink-0"
            >
              <img
                src={images.floating}
                alt={`${title} floating`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          )}

          {/* Mockups Grid */}
          <div className="grid grid-cols-2 gap-6 max-w-md">
            {images?.mockups?.map((img, i) => (
              <motion.div
                key={i}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`
                  ${i === 0 ? "col-span-2" : ""}
                  ${i === 1 ? "row-start-2" : ""}
                  ${i === 2 ? "row-start-2" : ""}
                `}
              >
                <img
                  src={img}
                  alt={`${title} screen ${i + 1}`}
                  className="w-56 max-w-xs md:max-w-sm rounded-xl shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Left Content */}
      <div className="flex-1 max-w-lg text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-6">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-white/15 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="space-y-4 mb-8 text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
          {description}
        </div>

        {/* External link button */}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
