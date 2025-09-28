import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectShowcase = ({ title, tags, description, images, link }) => {
    return (
        <section className="relative bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden">

            {/* Left Images */}
            <div className="relative flex-1 flex items-center justify-center gap-6 min-h-[300px]">
                {/* Floating Small Image - Higher position */}
                {images?.floating && (
                    <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 
             w-24 h-24 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20"
                    >
                        <img
                            src={images.floating}
                            alt={`${title} floating`}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                )}

                {/* Main Mockups - Lower position with more margin */}
                <div className="relative flex gap-4 md:gap-8 mt-24"> {/* Increased mt-16 to mt-24 */}
                    {images?.mockups?.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className="relative"
                        >
                            <img
                                src={img}
                                alt={`${title} screen ${i + 1}`}
                                className="w-32 md:w-56 rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 max-w-lg">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>

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
                        <p key={i} className="text-gray-300 text-lg leading-relaxed">
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