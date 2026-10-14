# 🧭 FindMyFlow — Turn Interests Into Careers

> **A startup-quality SaaS platform helping students discover their natural strengths, uncover their interests, and receive personalized career roadmaps that guide them toward becoming industry-ready professionals.**

---

## 🌟 Primary Capabilities & Features

1. **Apple-Inspired SaaS Design System**
   - Modern minimal UI with frosted glassmorphism (`backdrop-blur-xl`), subtle ambient background gradient meshes, soft shadows, and rounded cards.
   - Smooth **Dark & Light Mode** toggle with automatic system preference detection and `localStorage` persistence.
   - Micro-interactions, animated step transitions, progress bars, and celebration confetti on milestone completions.

2. **Complete Full-Stack Student Journey**
   - **Landing Page**: High-conversion hero with tagline *"Find Your Passion. Build Your Future."*, metrics bar, 4-step "How It Works" guide, featured career previews, student testimonials, interactive FAQ accordion, and dual CTAs.
   - **Authentication**: JWT token authentication with bcrypt password hashing, form validation (React Hook Form + Zod), plus a **1-Click Instant Demo Login** button for frictionless evaluator testing.
   - **Curiosity & Interest Selection**: Multi-select catalog of interest tiles with categories, counter badges, and live filter persistence.
   - **Weighted Assessment Engine**: 8 multi-dimensional behavioral scenarios that dynamically score and compute career suitability vectors programmatically (no hardcoded outcomes).
   - **Career Recommendations**: Ranked suitability match cards (e.g. 96%, 92%) with rationale (*Why it matches*), core skill badges, salary range, industry growth, and difficulty curve.
   - **Career Dossier Details**: In-depth day-to-day responsibilities, core skills taxonomy, and one-click launch into the learning roadmap.
   - **4-Tier Structured Roadmaps**: Beginner, Intermediate, Advanced, and Professional tiers with estimated completion hours, curated resources, and interactive progress tracking.
   - **Real-Time Student Dashboard**: Dynamic greeting, daily learning streak counter, primary career match, live roadmap completion bar, total completed modules, and motivational wisdom.
   - **Student Profile**: Editable bio, education background, selected interests overview, and diagnostic test status.

---

## 💼 Supported Career Pathways

The platform includes rich, fully articulated data and 4-tier roadmaps for:
- 💻 **Software Engineer** (Engineering & Cloud Architecture)
- 🍳 **Executive Chef & Culinary Artist** (Culinary Arts & Hospitality)
- 🎵 **Musician & Audio Producer** (Creative Arts & Sonic Engineering)
- 🧭 **International Tourist Guide & Travel Curator** (Hospitality, Travel & Culture)
- 🎨 **UI/UX Product Designer** (Design & Human-Computer Interaction)
- 📊 **Data Scientist & AI Analyst** (Artificial Intelligence & Analytics)

---

## 🛠️ Technology Stack

- **Frontend**:
  - React 19 & TypeScript
  - Vite 6
  - Tailwind CSS v4 & Glassmorphism styles
  - Lucide React icons
  - React Router v7
  - React Hook Form & Zod
  - Canvas-Confetti
- **Backend**:
  - Node.js (ES Modules)
  - Express.js
  - JSON Web Tokens (`jsonwebtoken`)
  - Password hashing (`bcryptjs`)
  - CORS & Dotenv
  - **Database**: Mongoose / MongoDB ready with automated High-Performance Local JSON Fallback Store (`server/data/store.json`) ensuring 100% demo uptime without database setup barriers.

---

## 🚀 Running the Application

Both servers are pre-configured and currently active:

- **Frontend App**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Health**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

### Running manually:

```bash
# Start backend server (Port 5000)
npm run server

# Start frontend application (Port 5173)
npm run client
```

---

## 🔑 Pre-Configured Demo Credentials

To test immediately without signing up:
- **Email**: `demo@findmyflow.com`
- **Password**: `password123`
*(Or click the "1-Click Demo" button on the Login/Landing page)*
