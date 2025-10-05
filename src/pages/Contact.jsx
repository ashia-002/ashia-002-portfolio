 //formFillup_@001 --->https://formspree.io/ --password

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    service: '',
    email: '',
    projectDescription: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Formspree endpoint - replace with your Formspree form ID
    const formspreeEndpoint = "https://formspree.io/f/your-form-id-here";
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          service: formData.service,
          email: formData.email,
          message: formData.projectDescription,
          _subject: `New Project Inquiry from ${formData.firstName} ${formData.lastName}`
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: '',
          lastName: '',
          service: '',
          email: '',
          projectDescription: ''
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

return (
    <section className="bg-black text-white py-16 px-6 md:px-20 lg:px-32 overflow-hidden">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-center mb-12 md:mb-16"
      >
        <h2 className="flex-1 text-md md:text-lg font-bold mb-10">.../Contact me ...</h2>
      </motion.h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-32 max-w-7xl mx-auto">
        {/* Left Info Section */}
        <motion.div
          className="flex-1 space-y-10 lg:space-y-14"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Want to collaborate directly?
            </h1>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start gap-2">
                <span className="text-white font-semibold min-w-6">1.</span>
                Send your project brief.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-white font-semibold min-w-6">2.</span>
                We'll schedule a 30-min discovery call.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-white font-semibold min-w-6">3.</span>
                I send a detailed proposal.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-gray-700"
          >
            <p className="text-gray-400 text-sm mb-2">E-Mail</p>
            <p className="text-lg md:text-xl font-medium text-white hover:text-gray-300 transition-colors cursor-pointer">
              ashia.sultana.maisha@gmail.com
            </p>
          </motion.div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-white">
                Name (required)
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 px-1 transition-colors placeholder-gray-500 text-white"
                  whileFocus={{ scale: 1.03 }}
                />
                <motion.input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 px-1 transition-colors placeholder-gray-500 text-white"
                  whileFocus={{ scale: 1.03 }}
                />
              </div>
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-white">
                Service
              </label>
              <motion.select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 px-1 text-white transition-colors"
                whileFocus={{ scale: 1.02 }}
              >
                <option value="" className="text-black">
                  Select a service
                </option>
                <option value="App Design" className="text-black">
                  App Design
                </option>
                <option value="Web Design" className="text-black">
                  Web Design
                </option>
                <option value="UI/UX Design" className="text-black">
                  UI/UX Design
                </option>
                <option value="Web Development" className="text-black">
                  Web Development
                </option>
                <option value="Backend Development" className="text-black">
                  Backend Development
                </option>
              </motion.select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-white">
                Email (required)
              </label>
              <motion.input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 px-1 transition-colors placeholder-gray-500 text-white"
                whileFocus={{ scale: 1.03 }}
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-white">
                Project description
              </label>
              <motion.textarea
                name="projectDescription"
                rows="4"
                value={formData.projectDescription}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 px-1 resize-none transition-colors placeholder-gray-500 min-h-[100px] text-white"
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
            </div>

            {/* Submit Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto min-w-[140px] text-center"
              >
                Submit
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;