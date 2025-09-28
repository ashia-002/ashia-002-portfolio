import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectShowcase = ({ title, tags, description, images, link, reverse }) => {
    return (
        <section
            className={`relative bg-black text-white py-16 px-6 md:px-20 
            flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
            items-center gap-12 md:gap-20 overflow-hidden`}
        >
            {/* Images Section */}
            <div className="relative flex-1 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                {/* Mockups (with floating image in the first row) */}
                <div
                className={`relative grid gap-6 justify-items-center 
                mt-24 md:mt-36 
                ${reverse ? "md:ml-16" : "md:mr-16"}`}
                >
                {/* Row 1: Floating Image */}
                {images?.floating && (
                    <motion.div
                    initial={{ y: reverse ? 40 : -40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40
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
                        className="w-28 sm:w-40 md:w-56 max-w-xs rounded-xl shadow-2xl"
                        />
                    </motion.div>
                    ))}
                </div>
                </div>


            </div>

            {/* Text Section */}
            <div className="flex-1 max-w-lg">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{title}</h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
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
                <div className="space-y-4 mb-8">
                    {description?.map((para, i) => (
                        <p key={i} className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>

                {/* External link button */}
                {link && (
                    <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    >
                        Explore <ArrowUpRight className="ml-2 w-5 h-5" />
                    </motion.a>
                )}
            </div>
        </section>
    );
};

export default ProjectShowcase;
