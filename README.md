# 🚀 Grippi Campaign Analytics – Full Stack Assignment

This repository contains my submission for the Grippi Junior Full-Stack Developer Intern Assignment.

It is a simplified analytics dashboard that displays campaign data fetched from a FastAPI backend and allows filtering by All / Active / Paused.

---

## 🛠 Tech Stack

| Layer     | Technology |
|----------|------------|
| Frontend | Next.js (App Router), React, TailwindCSS |
| Backend  | FastAPI, SQLAlchemy |
| Database | PostgreSQL |
| Deployment | Vercel (frontend), Railway (backend) |


# 🧪 HOW TO RUN LOCALLY

## 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd grippi-assignment

⚙ Backend Setup (FastAPI)
2️⃣ Navigate to backend
cd backend

3️⃣ Create & activate virtual environment
python -m venv .venv
.\.venv\Scripts\activate   

4️⃣ Install dependencies
pip install -r requirements.txt

5️⃣ Setup PostgreSQL
CREATE DATABASE grippi_db;


Then set:

set DATABASE_URL=postgresql+psycopg2://postgres:<password>@localhost:5432/grippi_db



If not set, the default local DB URL in database.py will be used.

6️⃣ Run FastAPI server
uvicorn main:app --reload

✔ Backend runs at → http://127.0.0.1:8000

✔ Campaigns → http://127.0.0.1:8000/campaigns



💻 Frontend Setup (Next.js)
7️⃣ Navigate to frontend
cd ../frontend

8️⃣ Install dependencies
npm install

9️⃣ Add environment file .env.local
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

🔟 Start frontend
npm run dev


✔ Open in browser → http://localhost:3000

You will see the Campaign Analytics Dashboard with working filter.
