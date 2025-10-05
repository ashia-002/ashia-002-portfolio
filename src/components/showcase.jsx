import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectShowcase = ({ title, year, tags, description, images, link, reverse }) => {
  return (
    <section
      className={`relative bg-black text-white py-8 px-6 md:px-20 
      flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
      items-center md:items-start gap-12 md:gap-20 overflow-hidden`}
    >
      {/* Images Section */}
      <div className="relative flex-1 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
        <div
          className={`relative grid gap-6 justify-items-center 
          mt-8 
          ${reverse ? "md:ml-16" : "md:mr-16"}`}
        >
          {/* Row 1: Floating Image */}
          {images?.floating && (
            <motion.div
              initial={{ y: reverse ? 40 : -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-36 h-36 sm:w-36 sm:h-36 md:w-64 md:h-64
              rounded-2xl overflow-hidden shadow-lg border-2 border-white/20"
            >
              <img
                src={images.floating}
                alt={`${title} floating`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          )}

          {/* Row 2: Mockup Images */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {images?.mockups?.map((img, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: (i + 1) * 0.1 }}
                className="relative"
              >
                <img
                  src={img}
                  alt={`${title} screen ${i + 1}`}
                  className="w-40 sm:w-56 md:w-72 lg:w-80 rounded-xl shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div
        className={`flex-1 max-w-lg flex flex-col 
        items-center md:items-start text-center md:text-left`}
      >
        {/* Title + Year */}
        <h2 className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 mb-6">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</span>
          {year && (
            <span className="text-lg sm:text-xl text-gray-200 font-medium">
              {year}
            </span>
          )}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-white/15 px-4 py-2 rounded-lg text-sm font-medium border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        {description && description.length > 0 && (
          <div className="mb-8 space-y-4">
            {/* First item as paragraph */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {description[0]}
            </p>

            {/* Remaining items as bullet points */}
            {description.length > 1 && (
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base sm:text-lg leading-relaxed">
                {description.slice(1).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* External link button */}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore <ArrowUpRight className="ml-2 w-5 h-5" />
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
