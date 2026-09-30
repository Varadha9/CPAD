# Varad Vikas Mandhare — Personal Developer Portfolio & Interactive Resume

**Developer:** Varad Vikas Mandhare  
**Institute:** MIT School of Computing, MIT ADT University, Pune  
**Degree:** B.Tech Information Technology (2023–2027) · CGPA: 7.59 / 10  
**Specialisation:** Software & Mobile App Development  
**Tech Stack:** React Native + TypeScript + Node.js 22 + Android SDK  

---

## 🏗️ Architecture

```
CPAD/
├── App.tsx                      ← Root Application Entry Point (SafeArea + StatusBar)
├── src/
│   ├── portfolio/
│   │   └── PortfolioApp.tsx     ← Continuous Stacked ScrollView & Section Coordinator
│   ├── screens/
│   │   ├── HomeScreen.tsx       ← Hero Card, Quick Pills, Stats & Quick Actions
│   │   ├── AboutScreen.tsx      ← Detailed Bio, Education & Leadership Highlights
│   │   ├── SkillsScreen.tsx     ← Categorized Tech Skills & Animated Progress Bars
│   │   ├── ProjectsScreen.tsx   ← Featured GitHub Projects with Expandable Architecture Notes
│   │   ├── ResumeScreen.tsx     ← Full Interactive Resume Viewer & One-Tap Actions
│   │   ├── CertsScreen.tsx      ← Professional Certifications & Hackathon Honors
│   │   └── ContactScreen.tsx    ← Direct Call, Email, LinkedIn & GitHub Links
│   ├── components/
│   │   ├── Navbar.tsx           ← Sticky Top Navigation Bar with Dynamic Tab Indicators
│   │   ├── SectionTitle.tsx     ← Accessible Branded Section Headers
│   │   └── SkillBar.tsx         ← Animated Progress Bar using React Native Animated API
│   ├── data/
│   │   └── portfolio.ts         ← Complete Data Layer (Extracted from Verified Resume & GitHub)
│   └── theme.ts                 ← Dark Navy Design Tokens & Accents
└── __tests__/
    ├── App.test.tsx             ← Root App Smoke & Lifecycle Test
    └── Portfolio.test.tsx       ← Comprehensive Portfolio Screen & Component Tests
```

---

## 📱 Navigation & Features

- **Home**: Avatar, Title, University & CGPA badges, quick skill pills, quick action buttons ("Projects", "Resume", "Contact"), and stats (6+ Projects, 24+ Tech Skills, 4 Certifications, 1st Hackathon Win).
- **About**: Detailed bio, academic degree, specialisation, and leadership (Class Representative, Research Paper author).
- **Skills**: Interactive skill categories (Languages, Backend/APIs, Databases, DevOps/CI-CD, Testing/QA, Mobile & Tools) with animated skill bars.
- **Projects**:
  - `ELEVARE` — AI-Driven Career Discovery Platform (React, Node, FastAPI, MongoDB, NLP, Ikigai recommendations)
  - `BookSphere` — DSA-Powered Online Bookstore (React 18, Supabase, Dijkstra routing, HashMap, BFS, Knapsack DP, Selenium BDD)
  - `Stockify` — Retail Inventory Android App (Java, Room DB, WorkManager, Barcode scanning, Material Design 3, GitHub Actions CI)
  - `Selenium CI/CD Automation Framework` — Production-grade test suite (Java, TestNG, Maven, GitHub Actions)
  - `Travel Agency Management System` — MVC backend (Node.js, Express, MySQL, EJS)
  - `CyberScope-AI` — 1st Place Cybersecurity Hackathon 2025 platform
  - Each card links directly to Varad's GitHub repository: `github.com/Varadha9`.
- **Interactive Resume**: Complete digital document view covering Summary, Technical Skills, Experience & Projects, Education, Certifications, and Achievements.
- **Certifications & Honors**: IBM DevOps, IBM Backend, Packt API, Selenium Automation, and 1st Place Hackathon 2025 awards.
- **Contact**: One-tap phone dialer (`tel:+918806438164`), email launcher (`mailto:varadmandhare924@gmail.com`), LinkedIn profile, and GitHub profile.

---

## 🚀 Running the App

```bash
# Ensure Node 22+ is active
node -v  # >= 22.11.0

# Run Jest unit tests
npm test

# Run ESLint check
npm run lint

# Start Metro dev server
npm start

# Build & Run on connected Android device
npm run android
```
