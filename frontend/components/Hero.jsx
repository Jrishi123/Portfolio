import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      {/* PROFILE IMAGE */}
      <img
        src="/myprofile.PNG"
        alt="Jothick Rishi"
        className="w-44 h-44 rounded-full border-4 border-blue-500 shadow-xl object-cover"
      />

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mt-8"
      >
        Jothick Rishi
      </motion.h1>

      {/* ROLE */}
      <p className="mt-6 text-xl text-gray-400 max-w-3xl">
        Cloud and DevOps Engineer
      </p>

      {/* DESCRIPTION */}
      <p className="mt-6 max-w-2xl text-gray-300">
        Building scalable cloud infrastructure,
        automating deployments,
        and delivering production-grade applications.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-6 mt-10">

        <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          View Projects
        </button>

        {/* RESUME BUTTON */}
        <a
          href="/myresume.pdf"
          download
          className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-gray-700 transition"
        >
          Download Resume
        </a>

      </div>

    </section>
  )
}