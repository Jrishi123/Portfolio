const getProjects = async (req, res) => {

  const projects = [
    {
      _id: 1,
      title: 'Slack to Teams Migration',
      description:
        'Migrated Slack messages to Microsoft Teams using Azure Functions and Graph API.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      techStack: [
        'Azure',
        'Azure Functions',
        'Graph API',
        'Node.js'
      ]
    },

    {
      _id: 2,
      title: 'EKS Kubernetes Deployment',
      description:
        'Deployed containerized applications to AWS EKS using Terraform and Docker.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475',
      techStack: [
        'AWS',
        'Kubernetes',
        'Terraform',
        'Docker'
      ]
    },

    {
      _id: 3,
      title: 'DevOps ML Project',
      description:
        'Built CI/CD pipeline for Machine Learning application deployment.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      techStack: [
        'GitHub Actions',
        'Docker',
        'Python',
        'ML'
      ]
    }
  ]

  res.json(projects)
}

const createProject = async (req, res) => {
  res.json({
    message: 'Project Created'
  })
}

module.exports = {
  getProjects,
  createProject
}