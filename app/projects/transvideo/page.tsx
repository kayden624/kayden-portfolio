"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TransVideoPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Full Stack • Docker • AWS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TransVideo
            <br />
            Platform
          </h1>

          <p className="text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
            A scalable full-stack video transcoding system
            developed using Node.js, FFmpeg, Docker,
            REST APIs, JWT authentication, and AWS deployment.
          </p>

        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "Video upload system",
            "FFmpeg transcoding",
            "Docker containerization",
            "JWT authentication",
            "REST API backend",
            "AWS EC2 deployment",
            "CPU load testing",
            "Cloud deployment workflow",
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

      {/* GitHub */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h2 className="text-4xl font-bold text-purple-400 mb-10">
          GitHub Repository
        </h2>

        <a
          href="https://github.com/kayden624/transvideo"
          target="_blank"
          className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition"
        >
          View GitHub Repository
        </a>

      </section>

      {/* Back */}
      <section className="text-center pb-20">

        <Link
          href="/"
          className="text-cyan-400 hover:text-cyan-300 text-lg tracking-[0.2em]"
        >
          ← BACK TO HOME
        </Link>

      </section>

    </main>
  );
}
