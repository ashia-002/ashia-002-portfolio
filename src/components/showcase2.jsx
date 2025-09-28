import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectShowcase = ({ title, tags, description, images, link }) => {
    return (
        <section className="relative bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-20 overflow-hidden">

            {/* Right Images - Swapped to right side */}
            <div className="relative flex-1 flex items-center justify-center gap-6 ml-8 min-h-[500px]">
                {/* Floating Small Image */}
                {images?.floating && (
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="absolute top-8 left-2 z-20 w-34 h-34 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20"

                    >
                        <img
                            src={images.floating}
                            alt={`${title} floating`}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                )}

                {/* Main Mockups - Different formation (stacked or arranged differently) */}
                <div className="relative grid grid-cols-2 gap-x-6 gap-y-6 mt-24 ml-24 max-w-md">
                    {images?.mockups?.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className={`
                                ${i === 0 ? 'col-span-2' : ''}
                                ${i === 1 ? 'row-start-2' : ''}
                                ${i === 2 ? 'row-start-2' : ''}
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

            {/* Left Content - Swapped to left side */}
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
                {/* <div className="space-y-4 mb-8">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Hey, anime fans! Struggling to track new episodes? Anime Alert Bot is your solution. Get auto-notifications for new episode releases!
                    </p>

                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-3">How It Works:</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                <span>Send the bot your anime link.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                <span>Get release schedules instantly. Skip searching the web or social media.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                <span>Every 30 mins, the bot checks for new episodes using a cron schedule. Be the first to know about voice or subtitle updates!</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed font-semibold">
                        Connect now and never miss an episode!
                    </p>
                </div> */}
                <div className="space-y-4 mb-8 text-gray-300 text-lg leading-relaxed font-semibold">
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