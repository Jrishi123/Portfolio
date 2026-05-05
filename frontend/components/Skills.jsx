const skills = [
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  'Terraform',
  'GitHub Actions',
  'Linux',
  'Jenkins',
  'MongoDB',
  'Node.js'
]

export default function Skills() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl text-center shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}