import React from "react";

const WorkExperience = ({ experiences, totalExperience }) => {
    return (
        <section className="w-full min-h-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 bg-black text-white">
            {/* Header */}
            <h2 className="text-right text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">.../Work</h2>

            {/* Experience Timeline */}
            <div className="space-y-6 md:space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="
                            group flex flex-col md:flex-row gap-4 md:gap-6 border-b border-gray-500
                            hover:bg-gray-100
                            transition duration-300 ease-in-out cursor-pointer p-3 md:p-4 rounded-md
                        "
                    >
                        {/* Date Column */}
                        <div className="md:w-1/2">
                            <div className="text-gray-200 font-semibold text-lg sm:text-xl md:text-2xl group-hover:text-gray-950 transition">
                                {exp.startDate} - {exp.endDate}
                            </div>
                            <div className="text-base sm:text-lg md:text-xl text-gray-400 group-hover:text-gray-950 transition">
                                {exp.duration}
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="md:w-3/4">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1 group-hover:text-gray-950 transition">{exp.company}</h3>
                            <p className="text-gray-400 mb-2 text-sm sm:text-base md:text-md group-hover:text-gray-950 transition">{exp.position}</p>
                            <p className="text-gray-400 text-sm sm:text-base md:text-md group-hover:text-white transition">{exp.technologies}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Total Experience */}
            <div className="flex mt-2 pt-6 md:pt-8 justify-end">
                <div className="flex flex-col text-sm sm:text-base md:text-md justify-items-end items-center">
                    <span className="text-gray-600 font-medium">Work experience</span>
                    <span className="text-base sm:text-lg font-semibold">{totalExperience}</span>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;