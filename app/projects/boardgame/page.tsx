"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function BoardGamePage() {
  const reducedMotion = useReducedMotion();
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-5xl"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            C# Console Game Project
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Gomoku & Notakto
            <br />
            Board Game System
          </h1>

          <p className="text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
            A modular board game framework developed in C# using .NET 8,
            supporting Gomoku and Notakto gameplay with PvP and PvC modes.
          </p>

        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-purple-400 mb-10 border-b border-purple-500/30 pb-4">
          Overview
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

          <p className="text-gray-300 text-lg leading-9">
            This project is a modular board game framework created
            using C# and .NET 8. It supports multiple game modes
            including Gomoku and Notakto with both
            Player vs Player and Player vs Computer gameplay.
          </p>

          <p className="text-gray-300 text-lg leading-9 mt-6">
            The system was designed using object-oriented programming
            principles and modular architecture to improve
            scalability, maintainability, and game logic separation.
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
            "Gomoku game mode",
            "Notakto game mode",
            "Player vs Player (PvP)",
            "Player vs Computer (PvC)",
            "Move handling system",
            "Rule validation system",
            "Command-based architecture",
            "Object-oriented modular design",
          ].map((feature) => (
            <motion.div
              key={feature}
              whileHover={reducedMotion ? {} : { y: -5, scale: 1.01 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition"
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

        <h2 className="text-4xl font-bold text-purple-400 mb-10 border-b border-purple-500/30 pb-4">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "C#",
            ".NET 8",
            "Object-Oriented Programming",
            "Console Application",
            "Game Logic Design",
            "Modular Architecture",
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

      {/* Learning Outcomes */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10 border-b border-cyan-500/30 pb-4">
          Learning Outcomes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "Object-oriented programming",
            "Game system architecture",
            "Console application development",
            "Software modularisation",
            "C# and .NET development",
            "Command-based interaction systems",
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={reducedMotion ? {} : { y: -5, scale: 1.01 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition"
            >
              <p className="text-lg text-gray-200">
                {item}
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
          href="https://github.com/kayden624/Csharp-gomoku-notakto-board-game"
          target="_blank"
          className="inline-block px-8 py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 text-white font-semibold transition"
        >
          View GitHub Repository
        </a>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto leading-8">
          This repository contains the full C# modular board game
          framework implementation including Gomoku and Notakto
          gameplay systems, rule validation, and player interaction logic.
        </p>

      </section>

      {/* Back Home */}
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
