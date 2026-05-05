'use client'

import { useState } from 'react'
import axios from 'axios'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      await axios.post(
        'http://localhost:5001/api/contact',
        form
      )

      setSuccess(true)

      setForm({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.log(error)
      alert('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-black text-white"
    >
      <h2 className="text-5xl font-bold text-center mb-6">
        Contact Me
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Let's connect for DevOps, Cloud, and Infrastructure projects.
      </p>

      {/* SOCIAL LINKS */}
      <div className="flex justify-center gap-8 text-3xl mb-12">
        <a
          href="https://github.com/Jrishi123"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jothick-rishi-b05665176/"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:jothickrishi2717@gmail.com"
          className="hover:text-blue-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* CONTACT FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          required
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          required
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <textarea
          placeholder="Your Message"
          rows="6"
          value={form.message}
          required
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none"
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value
            })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-xl w-full text-lg font-semibold"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && (
          <p className="text-green-400 text-center">
            Message sent successfully 🚀
          </p>
        )}
      </form>

      {/* EXTRA INFO */}
      <div className="text-center mt-16 text-gray-400 space-y-2">
        <p>jothickrishi2717@gmail.com</p>

        <p>
          GitHub:
          {' '}
          github.com/Jrishi123
        </p>

        <p>
          LinkedIn:
          {' '}
          linkedin.com/in/jothick-rishi
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}