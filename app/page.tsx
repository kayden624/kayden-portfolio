"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            KAYDEN
          </h1>

          <div className="flex gap-6 text-gray-300">
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-purple-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          Yikai Chiang (Kayden)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-gray-300"
        >
          Full-Stack Developer • Software Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex gap-4"
        >
          <button className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-2xl border border-gray-500 hover:border-purple-400 transition">
            Contact Me
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 max-w-5xl mx-auto px-6 py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-purple-400">
            About Me
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <p className="text-gray-300 text-lg leading-8">
              I’m a passionate Full-Stack Developer focused on building
              modern web and mobile applications. I enjoy creating
              interactive UI experiences, scalable systems, and AI-related
              projects using React, Next.js, Node.js, MongoDB, Docker,
              and cloud technologies.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12 text-blue-400">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "React",
            "Next.js",
            "React Native",
            "Node.js",
            "MongoDB",
            "Docker",
            "AWS",
            "JavaScript",
          ].map((skill) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md hover:border-purple-400 transition"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12 text-purple-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-purple-400 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              GravityFit Mobile App
            </h3>

            <p className="text-gray-300 mb-6">
              Mobile application for motion sensor analysis and
              fitness tracking using React Native and Expo.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-sm">
                React Native
              </span>

              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sm">
                Expo
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-blue-400 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              Video Transcoding System
            </h3>

            <p className="text-gray-300 mb-6">
              Dockerized video transcoding platform deployed on AWS
              using FFmpeg and Node.js backend services.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-sm">
                Docker
              </span>

              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sm">
                AWS
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 text-center py-24"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          Contact
        </h2>

        <p className="text-gray-400">
          Let’s build something amazing together.
        </p>
      </section>

    </main>
  );
}