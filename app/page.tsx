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

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          Yikai Chiang
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

          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-gray-500 hover:border-purple-400 transition"
          >
            Contact Me
          </a>

        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl font-bold mb-12 text-purple-400">
            About Me
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>

              <p className="text-gray-300 text-lg leading-8 mb-8">
                I’m a passionate Full-Stack Developer focused on building
                modern web and mobile applications. I enjoy creating
                interactive UI experiences, scalable systems, AI-related
                applications, and cloud deployment projects.
              </p>

              <div className="space-y-8">

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                    Education
                  </h3>

                  <ul className="text-gray-300 space-y-2">
                    <li>• Queensland University of Technology (QUT)</li>
                    <li>• Master of Information Technology</li>
                    <li>• Dental Model Technology Background</li>
                    <li>• Advertising Design Background</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                    Experience
                  </h3>

                  <ul className="text-gray-300 space-y-2">
                    <li>• Full-Stack Web Development Projects</li>
                    <li>• React Native & Expo Mobile Development</li>
                    <li>• Docker & AWS Deployment Projects</li>
                    <li>• AI and Interactive Application Development</li>
                    <li>• Customer Service & Hospitality Experience</li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="flex justify-center">
              <img
                src="/profile.jpg"
                alt="Yikai"
                className="w-72 h-72 object-cover rounded-3xl border border-purple-500/30 shadow-2xl"
              />
            </div>

          </div>

        </motion.div>
      </section>

      {/* Skills */}
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
            "C#",
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

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12 text-purple-400">
          Project Archive
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* GravityFit */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-400 transition duration-300"
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

            <a
              href="/projects/gravityfit"
              className="inline-block mt-6 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
            >
              View Project
            </a>
          </motion.div>
      {/* Pet Blog */}
<motion.div
  whileHover={{ y: -8 }}
  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-pink-400 transition duration-300"
>
  <h3 className="text-2xl font-bold mb-4">
    Pet Blog Mobile App
  </h3>

  <p className="text-gray-300 mb-6">
    A modern pet social blogging mobile application
    built with React Native and Expo featuring
    post sharing and mobile UI interaction systems.
  </p>

  <div className="flex gap-3 flex-wrap">
    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-sm">
      React Native
    </span>

    <span className="px-3 py-1 rounded-full bg-orange-500/20 text-sm">
      Expo
    </span>

    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-sm">
      Mobile App
    </span>
  </div>

  <a
    href="/projects/petblog"
    className="inline-block mt-6 px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-400 text-white font-semibold transition"
  >
    View Project
  </a>
</motion.div>
      
{/* TransVideo */}
<motion.div
  whileHover={{ y: -8 }}
  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-indigo-400 transition duration-300"
>
  <h3 className="text-2xl font-bold mb-4">
    TransVideo Platform
  </h3>

  <p className="text-gray-300 mb-6">
    A full-stack video transcoding platform developed
    using Node.js, FFmpeg, Docker, AWS EC2,
    JWT authentication, and REST APIs.
  </p>

  <div className="flex gap-3 flex-wrap">

    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-sm">
      Node.js
    </span>

    <span className="px-3 py-1 rounded-full bg-orange-500/20 text-sm">
      Docker
    </span>

    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-sm">
      AWS
    </span>

    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-sm">
      FFmpeg
    </span>

  </div>

  <div className="flex gap-4 mt-6 flex-wrap">

    <a
      href="/projects/transvideo"
      className="px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition"
    >
      View Project
    </a>

    <a
      href="https://github.com/kayden624/transvideo"
      target="_blank"
      className="px-6 py-3 rounded-2xl border border-white/20 hover:border-indigo-400 transition"
    >
      GitHub
    </a>

  </div>
</motion.div>

          {/* Board Game */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-purple-400 transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              C# Gomoku & Notakto Board Game
            </h3>

            <p className="text-gray-300 mb-6">
              A modular board game framework developed in C#
              using .NET 8 supporting Gomoku and Notakto
              game modes with PvP and PvC gameplay.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-sm">
                C#
              </span>

              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sm">
                .NET 8
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-sm">
                OOP
              </span>
            </div>

            <a
              href="/projects/boardgame"
              className="inline-block mt-6 px-6 py-3 rounded-2xl bg-purple-500 hover:bg-purple-400 text-white font-semibold transition"
            >
              View Project
            </a>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-10 text-blue-400">
            Contact Me
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="mailto:158aaabbbccc@gmail.com"
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400 transition"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/yikai-chiang-ab8872208/"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/kayden624"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://wa.me/61466556701"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-400 transition"
            >
              WhatsApp
            </a>

          </div>

          <div className="mt-10 text-gray-400 space-y-3">
            <p>Email: 158aaabbbccc@gmail.com</p>
            <p>WeChat ID: jiangkai_ee</p>
            <p>Line ID: 0921933338</p>
          </div>

        </div>
      </section>

    </main>
  );
}