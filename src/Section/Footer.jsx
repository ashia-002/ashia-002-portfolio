import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

import TechCard from "../components/techCard";
import { Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react';

const Contacts = [
    'Handcrafted by ME', 'Designed by Taisa', 'Powered by React Js'
];

export function Footer() {
    return (
        <section className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-20">
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 max-w-8xl mx-auto">
                
                {/* Left Block */}
                <div className="flex flex-col md:flex-row md:items-start max-w-lg gap-6 text-center md:text-left">
                    
                    {/* Ashia + paragraph */}
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">Ashia</h1>
                        <p className="text-sm sm:text-base text-gray-300 max-w-xs">
                            Web Developer. <br />
                            Backend Developer. <br />
                            UI/UX Designer.
                        </p>
                    </div>

                    {/* Sultana */}
                    <div className="flex justify-center md:justify-start md:ml-10 lg:ml-[-5rem]">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold md:relative md:top-[5rem]">
                        Sultana
                    </h1>
                    </div>

                </div>

                {/* Right Block */}
                <div className='flex flex-col gap-6 md:gap-8 px-0 md:px-10 text-center md:text-left'>
                    <h2 className="text-md md:text-lg font-bold">.../Contacts ...</h2>

                    {/* Nav Links */}
                    <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start text-sm sm:text-md">
                        <NavLink to="/about" className={({ isActive }) => `hover:text-gray-300 transition ${isActive ? 'text-white' : 'text-gray-400'}`}>About</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `hover:text-gray-300 transition ${isActive ? 'text-white' : 'text-gray-400'}`}>Projects</NavLink>
                        <NavLink to="/articles" className={({ isActive }) => `hover:text-gray-300 transition ${isActive ? 'text-white' : 'text-gray-400'}`}>Articles</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `hover:text-gray-300 transition ${isActive ? 'text-white' : 'text-gray-400'}`}>Contact</NavLink>
                    </div>

                    {/* Site Info Card */}
                    <div className="flex justify-center md:justify-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <TechCard title="SITE" technologies={Contacts} width='w-52 sm:w-60' />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 md:mt-20 flex flex-wrap gap-3 sm:gap-4 justify-center">
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
                        className="flex items-center gap-2 px-4 sm:px-5 py-2 border border-gray-600 rounded-full hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                        {social.icon}
                        {social.name}
                    </a>
                ))}
            </div>
        </section>
    );
}
