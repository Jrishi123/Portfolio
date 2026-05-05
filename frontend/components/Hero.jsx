'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">

      {/* Animated Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Profile */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
      >
        <Image
          src="/myprofile.PNG"
          alt="profile"
          width={220}
          height={220}
          className="rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.7)] object-cover"
        />
      </motion.div>

      {/* Animated Name */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold mt-10 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
      >
        Jothick Rishi
      </motion.h1>

      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          'Cloud Engineer ☁️',
          2000,
          'DevOps Engineer 🚀',
          2000,
          'AWS & Azure Specialist ⚡',
          2000,
          'Kubernetes & Terraform Engineer 🔥',
          2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="mt-6 text-2xl text-gray-300"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 max-w-3xl text-gray-400 text-lg leading-8"
      >
        Building scalable cloud infrastructure, automating deployments,
        and delivering production-grade applications with AWS, Azure,
        Docker, Kubernetes, and Terraform.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="flex gap-6 mt-12"
      >
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105"
        >
          View Projects
        </a>

        <a
          href="/myresume.pdf"
          download
          className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-2xl transition duration-300 hover:scale-105"
        >
          Download Resume
        </a>
      </motion.div>

    </section>
  )
}