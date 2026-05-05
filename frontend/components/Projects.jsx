'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
      )

      setProjects(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Real-world DevOps, Cloud, Infrastructure, and Automation projects
          showcasing production-grade deployments and scalable systems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}
            whileHover={{
              scale: 1.04,
              y: -10
            }}
            className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-4 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}