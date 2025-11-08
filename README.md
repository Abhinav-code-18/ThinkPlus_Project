ThinkPlus — Upgraded (No Authentication)
=======================================

Features included:
- Proper Tailwind setup with Vite (PostCSS + tailwind.config.cjs)
- React frontend with pages: Home, About, Courses, Contact, Dashboard, Admin
- Admin panel connects to backend for real CRUD operations on courses (no auth)
- Backend: Express API with simple file-based persistence (backend/courses.json)
- Production-ready: backend serves frontend build from ../frontend/dist

Quick start (development)
-------------------------
1) Backend
   cd backend
   npm install
   npm run dev
   (Runs on port 5000 by default)

2) Frontend
   cd frontend
   npm install
   npm run dev
   (Vite dev server runs on port 5173 and proxies /api to backend)

Notes
-----
- The backend stores courses in backend/courses.json. It's a simple JSON file used as a database.
- Admin panel performs real CRUD requests to /api/courses.
- No authentication is included as requested.