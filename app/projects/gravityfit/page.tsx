
"use client";

import { motion } from "framer-motion";

export default function GravityFitPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Full-Stack Mobile Application
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            GravityFit
          </h1>

          <p className="text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
            Motion analysis and fitness tracking platform built with
            React Native, Expo, cloud integration, and sensor-based
            performance visualization.
          </p>

        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10 border-b border-cyan-500/30 pb-4">
          Overview
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

          <p className="text-gray-300 text-lg leading-9">
            GravityFit is a full-stack fitness and motion tracking
            application developed as part of a university software
            engineering project. The application allows users to upload
            motion data and videos, visualize sensor readings, and
            analyse performance metrics through interactive charts.
          </p>

          <p className="text-gray-300 text-lg leading-9 mt-6">
            The project focuses on mobile-first development,
            cloud storage, real-time data visualization,
            and responsive UI/UX design using React Native and Expo.
          </p>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10 border-b border-cyan-500/30 pb-4">
          Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "Video upload and playback",
            "Motion sensor data visualization",
            "Interactive line and bar charts",
            "Cloud video storage integration",
            "Shareable coach feedback system",
            "Responsive mobile-first UI",
            "Authentication and user management",
            "Frame-by-frame performance analysis",
          ].map((feature) => (
            <motion.div
              key={feature}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition"
            >
              <p className="text-lg text-gray-200">
                {feature}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Technologies */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10 border-b border-cyan-500/30 pb-4">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "React Native",
            "Expo",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Azure Blob Storage",
            "JWT",
            "REST API",
            "Express.js",
            "Chart.js",
          ].map((tech) => (
            <div
              key={tech}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200"
            >
              {tech}
            </div>
          ))}

        </div>
      </section>

      {/* GitHub */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Project Repository
        </h2>

        <a
          href="https://github.com/Nick-IFN711/IFN711-Group37"
          target="_blank"
          className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
        >
          View GitHub Repository
        </a>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto leading-8">
          This repository contains multiple branches for collaborative
          development, feature implementation, testing,
          and deployment workflows completed during the project.
        </p>

      </section>

      {/* Back Home */}
      <section className="text-center pb-20">

        <a
          href="/"
          className="text-cyan-400 hover:text-cyan-300 text-lg tracking-[0.2em]"
        >
          ← BACK TO HOME
        </a>

      </section>

    </main>
  );
}

