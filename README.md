# Cloud & DevOps Engineer Portfolio

Modern Full Stack Cloud & DevOps Engineer Portfolio Website built using Next.js, Node.js, MongoDB, Docker, and CI/CD pipelines.

---

# Live Features

* Modern responsive UI
* Full Stack Architecture
* Dynamic Project Management
* MongoDB Database Integration
* Contact Form Backend API
* Docker Support
* CI/CD Ready
* Dark Theme UI
* Resume Download
* GitHub & LinkedIn Integration
* Production Ready Deployment

---

# Tech Stack

## Frontend

* Next.js 15
* React.js
* Tailwind CSS
* Framer Motion
* Axios
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication

## DevOps & Cloud

* Docker
* GitHub Actions
* AWS
* Azure
* Kubernetes
* Terraform

---

# Project Structure

```bash
cloud-devops-engineer-portfolio/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── services/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

# Features Included

## Hero Section

* Animated DevOps introduction
* Profile image
* Resume download button
* Responsive layout

## Skills Section

* AWS
* Azure
* Docker
* Kubernetes
* Terraform
* Jenkins
* GitHub Actions
* Linux
* MongoDB
* Node.js

## Projects Section

Dynamic project cards fetched from backend API.

Example projects:

* Slack to Teams Migration
* Azure Function Apps
* AWS EKS Deployment
* Terraform Infrastructure
* DevOps ML Project

## Contact Section

* Contact form API
* MongoDB message storage
* LinkedIn integration
* GitHub integration

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/Jrishi123/cloud-devops-engineer-portfolio.git
```

Go to project directory:

```bash
cd cloud-devops-engineer-portfolio
```

---

# Frontend Setup

Go to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:3000
```

---

# Backend Setup

Open another terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=5001
```

Start backend:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5001
```

---

# MongoDB Atlas Setup

1. Create MongoDB Atlas account
2. Create free cluster
3. Create database user
4. Allow IP Access
5. Copy connection string
6. Add connection string in `.env`

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

# API Endpoints

## Projects

```http
GET /api/projects
POST /api/projects
```

## Contact

```http
POST /api/contact
```

---

# Docker Setup

Build and run containers:

```bash
docker-compose up --build
```

---

# GitHub Actions CI/CD

The project includes GitHub Actions workflow for:

* Frontend build validation
* Backend dependency installation
* CI/CD pipeline automation

Workflow path:

```bash
.github/workflows/deploy.yml
```

---

# Deployment

## Frontend Deployment

Deploy frontend using:

* Vercel

## Backend Deployment

Deploy backend using:

* Render
* Railway

## Database

* MongoDB Atlas

---

# Screenshots

Add screenshots inside:

```bash
/public/screenshots
```

Example:

* Homepage
* Projects section
* Contact section
* Mobile view

---

# Future Improvements

* Admin Dashboard
* Blog CMS
* JWT Login System
* Kubernetes Deployment
* Terraform Infrastructure
* AWS Architecture Visualization
* Monitoring Dashboard
* Prometheus & Grafana
* AI Chatbot Assistant

---

# Author

## Jothick Rishi

Cloud & DevOps Engineer

GitHub:
[Jrishi123 GitHub](https://github.com/Jrishi123?utm_source=chatgpt.com)

LinkedIn:
[Jothick Rishi LinkedIn](https://www.linkedin.com/in/jothick-rishi-b05665176/?utm_source=chatgpt.com)

---

# License

This project is open-source and available under the MIT License.
