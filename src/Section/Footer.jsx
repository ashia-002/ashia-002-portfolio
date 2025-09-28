
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

import TechCard from "../components/techCard";
import { Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react';

const Contacts = [
    'Handcrafted by ME', 'Designed by Taisa', 'Powered by React Js'
];

export function Footer() {
    return (
        <section className="w-full bg-black text-white px-12 py-20">
            <div className="flex flex-row justify-between gap-6 max-w-8xl mx-auto">
                <div className="max-w-lg gap-6">
                    {/* Left Column: Ashia + paragraph */}
                    <div className="flex flex-col gap-4 ">
                        <h1 className=" text-8xl font-bold">Ashia</h1>
                        <p className="text-sm text-gray-300 max-w-xs">
                            Web Developer. <br />
                            Backend Developer. <br />
                            UI/UX Designer.
                        </p>
                    </div>

                    {/* Right Column: Sultana */}
                    <div className="flex items-start ml-36">
                        <h1 className="relative  top-[-5rem] text-8xl font-bold">Sultana</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-8 px-10'>
                    <h2 className="flex-1 text-md md:text-lg font-bold">.../Contacts ...</h2>
                    <div className="flex gap-6 text-md">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition ${isActive ? 'text-white' : 'text-gray-400'
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition ${isActive ? 'text-white' : 'text-gray-400'
                                }`
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/articles"
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition ${isActive ? 'text-white' : 'text-gray-400'
                                }`
                            }
                        >
                            Articles
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition ${isActive ? 'text-white' : 'text-gray-400'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <TechCard title="SITE" technologies={Contacts} width='w-60' />
                        </motion.div>
                    </div>
                </div>
            </div>
        {/* Social Links */}
        <div className="mt-20 flex flex-wrap gap-4 justify-center">
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
        </section>
    );
}
