import { motion } from "framer-motion";
import TechCard from "../components/techCard";
import Profile from "../assets/Ashia.jpg"
import { ArrowBigRight, ArrowDown01, ArrowDownLeft, ArrowUp, ArrowUpRight, Github } from 'lucide-react';


const frontendTech = [
    'HTML', 'CSS', 'JavaScript', 'Vuex', 'Redux Toolkit', 'NextJs',
    'GraphQL', 'React Native', 'Puppeteer', 'Enzyme'
];
const styles = [
    'CSS', 'TailwindCSS', 'PostCSS', 'Radix UI', 'Material UI'
];

const backend = [
    'Golang', 'Rest API', 'Cloudinary', 'PostgreSQL', 'MySQL', 'MongoDB', 'gRPC',
    'Redis', 'Node', 'Nest', 'TypeORM', 'Microservices'
];

const devops = [
    'Web Design', 'App Design', 'UI', 'Prototyping', 'Micro Animation'
];

export function About(params) {

    return (
        <section className="w-full bg-black text-white py-20 px-4 min-h-[150vh]">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <div className="flex flex-col md:flex-row gap-6 mb-24">
                    <h2 className="flex-1 text-md md:text-lg font-bold mb-10">.../About me ...</h2>
                    <div className="relative md:left-[-4rem]">
                        <p className="text-md text-gray-400 mt-4 md:mt-0 w-72">
                            Hello! I am Ashia Sultana. I am <span className="italic text-white">full-stack developer</span>. I have <span className="italic text-white">2+ years</span> of <span className="italic text-white">Experience</span>.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left column: Skills */}
                    <div className="flex-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <TechCard title="Front-end" technologies={frontendTech} bgColor="bg-white/90" textColor="text-black/80" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex flex-row items-center gap-12"
                        >
                            <TechCard title="Styles" technologies={styles} width="w-80" />

                            <div className="flex items-center">
                                <button className="justify-center bg-black/90 text-white border border-white p-3 rounded-full hover:scale-105 transition">
                                    <Github className="w-5 h-5" />
                                </button>
                                <button className="relative md:left-[-1rem] bg-white text-black p-3 rounded-full hover:scale-105 transition">
                                    <ArrowUpRight />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <TechCard title="Back-end" technologies={backend} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex flex-row items-center gap-12"
                        >
                            <TechCard title="UI/UX" technologies={devops} width="w-80" />

                            <p className="text-md text-gray-400 mt-4 w-44">
                                Some of my <span className="italic text-white">favorite technologies</span>, <span className="italic text-white">topics</span>, or <span className="italic text-white">tools</span> that I worked with
                            </p>
                        </motion.div>
                    </div>

                    {/* Right column: Image */}
                    <div className="flex-1 flex justify-center lg:justify-end items-start">
                        <img
                            src={Profile} // Replace with your actual image path
                            alt="Ashia Sultana"
                            className="w-full max-w-sm rounded-[30px] object-cover shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

