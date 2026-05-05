import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const res = await axios.get('http://portfolio-bsww.onrender.com/api/projects')
    setProjects(res.data)
  }

  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="bg-gray-900 p-6 rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4"
            />

            <h3 className="text-2xl font-semibold">{project.title}</h3>

            <p className="text-gray-400 mt-3">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
