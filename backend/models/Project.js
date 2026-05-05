const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    github: String,
    liveDemo: String,
    techStack: [String]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Project', projectSchema)