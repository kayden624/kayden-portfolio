"use client";
import { useState } from "react";
import Image from "next/image";
import PortfolioAssistant from "./components/PortfolioAssistant";

import { motion } from "framer-motion";
import {
  FaReact,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiExpo,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiGithub,
  SiSharp,
} from "react-icons/si";

export default function Home() {

const [showQR, setShowQR] = useState<
  "whatsapp" | "line" | "wechat" | null
>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setError("We couldn't send your message right now. Please try again later.");
        return;
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError("We couldn't send your message right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
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
          Full-Stack Developer building web, mobile, and AI-powered products.
        </motion.p>

        <p className="mt-3 text-sm text-gray-400 md:text-base">
          React • Next.js • TypeScript • Node.js • AWS
        </p>

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
                I’m a QUT Master of Information Technology graduate focused on full-stack and AI application development. I build responsive web and mobile products using React, Next.js, React Native, Node.js, databases, and cloud services. My background in advertising design, dental technology, and customer service also helps me approach software with attention to usability, detail, and real user needs.
              </p>

              <div className="space-y-8">

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                    Education
                  </h3>

                  <ul className="text-gray-300 space-y-2">
                    <li>• Queensland University of Technology</li>
                    <li>• Master of Information Technology</li>
                    <li>• Completed December 2025</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                    Additional Background
                  </h3>

                  <ul className="text-gray-300 space-y-2">
                    <li>• Dental Model Technology</li>
                    <li>• Advertising Design</li>
                    <li>• Customer Service & Hospitality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                    Development Focus
                  </h3>

                  <ul className="text-gray-300 space-y-2">
                    <li>• Full-Stack Web Applications</li>
                    <li>• React Native & Expo Mobile Development</li>
                    <li>• AI Application Integration</li>
                    <li>• REST APIs and Database Systems</li>
                    <li>• Docker & AWS Deployment</li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="flex justify-center">
              <Image
                src="/profile.jpg"
                alt="Yikai"
                width={288}
                height={288}
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

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    
{[
  { name: "TypeScript", description: "Building typed web applications.", icon: <SiTypescript size={42} /> },
  { name: "React", description: "Building modern interactive web interfaces.", icon: <FaReact size={42} /> },
  { name: "Next.js", description: "Creating full-stack web applications.", icon: <SiNextdotjs size={42} /> },
  { name: "Node.js", description: "Developing backend services and APIs.", icon: <FaNodeJs size={42} /> },
  { name: "React Native", description: "Developing cross-platform mobile applications.", icon: <FaReact size={42} /> },
  { name: "Expo", description: "Building and deploying Expo applications.", icon: <SiExpo size={42} /> },
  { name: "PostgreSQL", description: "Working with relational data systems.", icon: <SiPostgresql size={42} /> },
  { name: "MongoDB", description: "Managing NoSQL data for web systems.", icon: <SiMongodb size={42} /> },
  { name: "REST APIs", description: "Connecting frontend applications with services.", icon: <FaNodeJs size={42} /> },
  { name: "Python", description: "Building automation and AI-related applications.", icon: <FaPython size={42} /> },
  { name: "C# / .NET", description: "Developing object-oriented software systems.", icon: <SiSharp size={42} /> },
  { name: "Docker", description: "Containerizing applications and services.", icon: <FaDocker size={42} /> },
  { name: "AWS", description: "Deploying cloud-based applications and APIs.", icon: <FaAws size={42} /> },
  { name: "Git / GitHub", description: "Version control and collaborative development.", icon: <SiGithub size={42} /> },
].map((skill) => (
  <motion.div
    whileHover={{ y: -8 }}
    key={skill.name}
    className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      backdrop-blur-md
      hover:border-cyan-400
      transition
      duration-300
      flex
      flex-col
      items-center
      justify-center
      gap-5
      text-center
    "
  >
    <div className="text-cyan-400">
      {skill.icon}
    </div>

    <h3 className="text-xl font-semibold">
      {skill.name}
    </h3>

    <p className="text-sm text-gray-400 leading-6">
      {skill.description}
    </p>
  </motion.div>
))}


  </div>
</section>



      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-4 text-purple-400">
          Featured Projects
        </h2>
        <p className="mb-12 text-lg text-gray-300">
          A selection of student and personal projects across web, mobile, cloud, and software development.
        </p>

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
    A student-built social pet-blogging experience created with React Native and Expo, featuring responsive layouts, navigation, authentication flows, and image-based content.
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
    className="inline-block mt-6 px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300 text-white font-semibold transition"
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

  <a
    href="/projects/transvideo"
    className="inline-block mt-6 px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition"
  >
    View Project
  </a>
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
  className="relative z-10 max-w-5xl mx-auto px-6 py-24"
>
  <h2 className="text-5xl font-bold text-cyan-400 mb-12 text-center">
    Contact Me
  </h2>

  <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-8 text-gray-300">
    I’m open to software development and AI application opportunities in Australia. Feel free to reach out through the form or connect with me online.
  </p>

  <form
    onSubmit={handleSubmit}
    className="
      bg-white/5
      border
      border-cyan-500/20
      rounded-3xl
      p-10
      backdrop-blur-md
      flex
      flex-col
      gap-6
    "
  >

    {/* Name */}
    <label htmlFor="contact-name" className="sr-only">Your Name</label>
    <input
      id="contact-name"
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="
        bg-black/40
        border
        border-white/10
        rounded-xl
        p-4
        text-white
        outline-none
        focus:border-cyan-400
      "
      required
    />

    {/* Email */}
    <label htmlFor="contact-email" className="sr-only">Your Email</label>
    <input
      id="contact-email"
      type="email"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="
        bg-black/40
        border
        border-white/10
        rounded-xl
        p-4
        text-white
        outline-none
        focus:border-cyan-400
      "
      required
    />

    {/* Message */}
    <label htmlFor="contact-message" className="sr-only">Your Message</label>
    <textarea
      id="contact-message"
      placeholder="Your Message"
      rows={6}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="
        bg-black/40
        border
        border-white/10
        rounded-xl
        p-4
        text-white
        outline-none
        focus:border-cyan-400
      "
      required
    />

    {/* Submit */}
    <button
      type="submit"
      disabled={loading}
      className="
        bg-cyan-400
        hover:bg-cyan-300
        text-black
        font-bold
        py-4
        rounded-xl
        transition
      "
    >
      {loading ? "Sending..." : "Send Message"}
    </button>

    {/* Success */}
    {success && (
      <p className="text-green-400 font-medium">
        Message sent successfully.
      </p>
    )}

    {error && (
      <p role="alert" className="text-red-400 font-medium">
        {error}
      </p>
    )}

  </form>
  <div className="mt-10 flex flex-wrap justify-center gap-4">
    <a
      href="https://www.linkedin.com/in/yikai-chiang-ab8872208/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-cyan-400/40 px-5 py-3 text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/kayden624"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-cyan-400/40 px-5 py-3 text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      GitHub
    </a>
  </div>

 {/* Other contact options */}
<div className="mt-12 border-t border-white/10 pt-8">
<h3 className="mb-8 text-center text-2xl font-semibold text-gray-300">
  Other contact options
</h3>
<div className="flex justify-center gap-10 flex-wrap">

  {/* WhatsApp */}
  <button
    onClick={() => setShowQR("whatsapp")}
    className="
      flex
      flex-col
      items-center
      gap-3
      text-white
      hover:scale-110
      transition
    "
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
      alt="whatsapp"
      className="w-12 h-12"
    />

    <span className="tracking-wide">
      WhatsApp
    </span>
  </button>

  {/* LINE */}
  <button
    onClick={() => setShowQR("line")}
    className="
      flex
      flex-col
      items-center
      gap-3
      text-white
      hover:scale-110
      transition
    "
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111498.png"
      alt="line"
      className="w-12 h-12"
    />

    <span className="tracking-wide">
      LINE
    </span>
  </button>

  {/* WeChat */}
  <button
    onClick={() => setShowQR("wechat")}
    className="
      flex
      flex-col
      items-center
      gap-3
      text-white
      hover:scale-110
      transition
    "
  >
    <img
      
  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/wechat-app-icon.png"
  alt="wechat"
      className="w-12 h-12"
    />

    <span className="tracking-wide">
      WeChat
    </span>
  </button>

</div>
</div>

{/* QR Popup */}
{showQR && (
  <div
    className="
      fixed
      inset-0
      bg-black/80
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
    "
  >
    <div
      className="
        bg-[#0a0f1c]
        border
        border-cyan-400/30
        rounded-3xl
        p-10
        text-center
        relative
        max-w-sm
        w-full
      "
    >

      {/* Close */}
      <button
        onClick={() => setShowQR(null)}
        className="
          absolute
          top-4
          right-4
          text-white/60
          hover:text-white
        "
      >
        ✕
      </button>

      {/* WhatsApp */}
      {showQR === "whatsapp" && (
        <>
          <img
            src="/IMG_8750.JPG"
            alt="WhatsApp QR"
            className="rounded-2xl w-full"
          />

          <p className="mt-6 text-green-300 text-xl font-semibold">
            WhatsApp ID: +61466556701
          </p>
        </>
      )}

      {/* LINE */}
      {showQR === "line" && (
        <>
          <img
            src="/IMG_8749.JPG"
            alt="Line QR"
            className="rounded-2xl w-full"
          />

          <p className="mt-6 text-green-300 text-xl font-semibold">
            LINE ID: 0921933338
          </p>
        </>
      )}

      {/* WeChat */}
      {showQR === "wechat" && (
        <>
          <img
            src="/IMG_8751.JPG"
            alt="WeChat QR"
            className="rounded-2xl w-full"
          />

          <p className="mt-6 text-green-300 text-xl font-semibold">
            WeChat: jiangkai_ee
          </p>
        </>
      )}

    </div>
  </div>
)}

{/* Footer */}
<div className="mt-20 border-t border-white/10 pt-8 text-center">

  <p className="text-gray-500 tracking-[0.3em] text-sm">
    © 2026 YIKAI CHIANG. ALL RIGHTS RESERVED.
  </p>

</div>


</section>
      

      <PortfolioAssistant />
    </main>
  );
}
