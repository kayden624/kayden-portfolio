"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PetBlogPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >

          <p className="text-pink-400 uppercase tracking-[0.3em] mb-4">
            React Native • Expo Project
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pet Blog
            <br />
            Mobile Application
          </h1>

          <p className="text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
            A modern pet blogging mobile application developed
            using React Native and Expo with social media style
            interaction features.
          </p>

        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-pink-400 mb-10">
          Overview
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <p className="text-gray-300 text-lg leading-9">
            This mobile application allows users to share pet-related
            posts, upload images, browse feeds, and interact with
            content in a modern social-media style experience.
          </p>

          <p className="text-gray-300 text-lg leading-9 mt-6">
            The project was built using React Native and Expo,
            focusing on responsive UI design, mobile interaction,
            navigation systems, and scalable frontend architecture.
          </p>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-orange-400 mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "User authentication",
            "Create and browse posts",
            "Image upload functionality",
            "Social feed interface",
            "Responsive mobile UI",
            "Expo Router navigation",
            "React Native components",
            "Modern frontend architecture",
          ].map((feature) => (
            <motion.div
              key={feature}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
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

        <h2 className="text-4xl font-bold text-pink-400 mb-10">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "React Native",
            "Expo",
            "Expo Router",
            "JavaScript",
            "Mobile UI Design",
            "Frontend Development",
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

        <h2 className="text-4xl font-bold text-orange-400 mb-10">
          GitHub Repository
        </h2>

        <a
          href="https://github.com/kayden624/Expo-pet-blog"
          target="_blank"
          className="inline-block px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 text-white font-semibold transition"
        >
          View GitHub Repository
        </a>

      </section>

      {/* Back */}
      <section className="text-center pb-20">

        <Link
          href="/"
          className="text-pink-400 hover:text-pink-300 text-lg tracking-[0.2em]"
        >
          ← BACK TO HOME
        </Link>

      </section>

    </main>
  );
}
