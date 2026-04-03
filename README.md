# Work Manager Application

## 📋 Project Overview

A Task Manager application built with:
- **Backend**: Node.js + Express.js + MongoDB
- **Frontend**: React.js
- **Database**: MongoDB Atlas

## 👤 Student Information

- **Name**: Phan Phúc Toàn
- **Student ID**: 2251220252
- **Class**: 22ct1

## ✨ Features

1. **Task Management**
   - View all tasks
   - Create new tasks
   - Mark tasks as completed
   - Delete tasks

2. **Student Information Page** (`/about`)
   - Displays student name, ID, and class
   - Shows application information

3. **Health Check** (`/health`)
   - Returns `{ "status": "ok" }`

4. **API Endpoints**
   - `GET /api/tasks` - Get all tasks
   - `POST /api/tasks` - Create new task
   - `PUT /api/tasks/:id` - Update task status
   - `DELETE /api/tasks/:id` - Delete task

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose installed
- Node.js & npm (for local development)

### Running with Docker Compose

```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health Check: http://localhost:5000/health
- Student Info: http://localhost:5000/about

### Running Locally

**Backend Setup:**
```bash
cd backend
npm install
npm start
```

**Frontend Setup:**
```bash
cd frontend
npm install
npm start
```

## 📁 Project Structure

```
work-manager/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── .env.example
│   ├── Dockerfile
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│   ├── nginx.conf
│   └── .gitignore
├── docker-compose.yml
└── README.md
```

## 🔒 Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
DB_URL=mongodb+srv://toan2251220252_db_user:toan123@cluster0.httfmkm.mongodb.net/?appName=Cluster0
APP_NAME=Work Manager
```

## 🐳 Docker Images on Docker Hub

Push your images:
```bash
docker build -t your-docker-username/work-manager-backend:latest ./backend
docker build -t your-docker-username/work-manager-frontend:latest ./frontend
docker push your-docker-username/work-manager-backend:latest
docker push your-docker-username/work-manager-frontend:latest
```

## 📝 Git Workflow

- **main**: Production branch
- **develop**: Development branch
- **feature/work-manager**: Feature branch

---

**Created**: April 3, 2026