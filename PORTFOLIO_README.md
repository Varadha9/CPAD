# CPAD Assignment 1 — Personal Developer Portfolio
### React Native + TypeScript Mobile Application

**Student:** Mandhare Varad Vikas
**Enrollment:** ADT23SOCB1574
**Institute:** MIT School of Computing, MIT ADT University, Pune
**Program:** B.Tech, Information Technology (2023 – 2027)
**GitHub Repository:** https://github.com/Varadha9/CPAD

---

## 1. What Framework Is This Built In?

This application is built using **React Native** with **TypeScript**.

> `.tsx` is simply the file extension for TypeScript files that contain JSX (UI markup).
> React Native is the **framework** — `.tsx` is the **language format**.
> Every React Native app in the world uses `.tsx` or `.jsx` files.

### Proof From the Code

Every single screen in this app imports directly from `'react-native'`:

```tsx
// App.tsx — Line 2
import { View, StyleSheet, StatusBar } from 'react-native';

// HomeScreen.tsx — Line 2
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

// SkillsScreen.tsx — Line 2
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// ProjectsScreen.tsx — Line 2
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
```

`View`, `Text`, `TouchableOpacity`, `ScrollView`, `StyleSheet`, `Linking`, `StatusBar` — these are **React Native native components**. They do not exist in plain TypeScript, plain React, or any web framework.

### package.json — Framework Dependencies

```json
"react-native": "0.86.2"       ← React Native framework
"react": "19.2.3"              ← React UI engine
"typescript": "^5.8.3"        ← TypeScript language
"react-native-safe-area-context": "^5.5.2"
```

### How It Runs on Android

```
Your .tsx source code
        ↓
   Metro Bundler (JS bundler for React Native)
        ↓
   Gradle builds native Android APK
        ↓
   Installed on Android phone via ADB
        ↓
   Runs as a NATIVE Android app (not a website)
```

Command used to run on phone:
```bash
npm run android
# which internally runs: react-native run-android
```

---

## 2. Project Overview

A fully functional **native Android mobile application** that serves as a personal developer portfolio for Varad Vikas Mandhare. The app showcases the developer's profile, technical skills, production-grade projects, certifications, achievements, resume download, and direct contact channels.

---

## 3. Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native 0.86.2 |
| Language | TypeScript 5.8.3 |
| UI Components | React Native core (View, Text, ScrollView, TouchableOpacity) |
| Navigation | Custom horizontal Navbar with state-based screen switching |
| Styling | React Native StyleSheet API |
| Linking | React Native Linking API (email, phone, GitHub, LinkedIn) |
| Build Tool | Gradle (Android) |
| Bundler | Metro |
| Package Manager | npm |
| Version Control | Git + GitHub |
| Target Platform | Android (API 34/35) |
| Dev Environment | Node.js 22, JDK 21, Android SDK |

---

## 4. Project Structure

```
CPAD/
├── App.tsx                          ← Root entry point, Bottom Tab Navigator
├── index.js                         ← React Native app registration
├── package.json                     ← Dependencies (react-native, typescript)
├── tsconfig.json                    ← TypeScript configuration
├── resume.pdf                       ← Downloadable resume (hosted on GitHub)
│
├── src/
│   ├── theme.ts                     ← Global color design tokens
│   │
│   ├── data/
│   │   ├── portfolio.ts             ← All portfolio content (skills, projects, certs, info)
│   │   └── students.ts             ← Class list data
│   │
│   ├── components/
│   │   ├── Navbar.tsx               ← Horizontal scrollable section navigator
│   │   ├── SectionTitle.tsx         ← Reusable section heading component
│   │   └── SkillBar.tsx             ← Reusable skill progress bar component
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx           ← Hero, summary, stats, social links
│   │   ├── AboutScreen.tsx          ← Bio, info grid, currently building
│   │   ├── SkillsScreen.tsx         ← 24+ skills with category filter tabs
│   │   ├── ProjectsScreen.tsx       ← 6 projects with expandable highlights
│   │   ├── CertsScreen.tsx          ← 4 certifications with issuer & skills
│   │   ├── ResumeScreen.tsx         ← Resume card + PDF download button
│   │   ├── ContactScreen.tsx        ← 5 contact channels (tap to open)
│   │   └── ClassListScreen.tsx      ← CPAD class student list
│   │
│   ├── portfolio/
│   │   └── PortfolioApp.tsx         ← Portfolio app shell with Navbar
│   │
│   └── brewbox/
│       └── BrewBoxApp.tsx           ← BrewBox e-commerce app (Website 2)
│
└── android/                         ← Native Android project (Gradle)
```

---

## 5. App Navigation Flow

```
App.tsx (Bottom Tab Bar)
│
├── 👤 Portfolio Tab  →  PortfolioApp.tsx
│       │
│       ├── Navbar (horizontal scroll tabs)
│       │     Home | About | Skills | Projects | Certs | Resume | Contact
│       │
│       └── Screen Content (state-based switching)
│             ├── HomeScreen     → Avatar, Name, Role, University, Skills Pills,
│             │                    CTA Buttons, GitHub/LinkedIn/Email/Call links,
│             │                    Professional Summary, Stats (6+ Projects, 24+ Skills)
│             │
│             ├── AboutScreen    → Bio paragraph, 6-card info grid, Currently Building
│             │
│             ├── SkillsScreen   → 24+ skills, category filter chips (All / Languages /
│             │                    Backend / Databases / DevOps / Testing / Mobile)
│             │
│             ├── ProjectsScreen → 6 project cards with tech badges, expandable
│             │                    engineering highlights, direct GitHub links
│             │
│             ├── CertsScreen    → 4 certifications with issuer, year, skills covered
│             │
│             ├── ResumeScreen   → Resume summary card + 📄 Download Resume (PDF) button
│             │                    Opens: github.com/Varadha9/CPAD/raw/main/resume.pdf
│             │
│             └── ContactScreen  → 5 channels: Email, Phone, LinkedIn, GitHub, Location
│
├── ☕ BrewBox Tab    →  BrewBoxApp.tsx  (Website 2 — separate assignment)
│
└── 📋 Class List Tab →  ClassListScreen.tsx
```

---

## 6. Screens — Detailed Breakdown

### Screen 1 — Home
- Avatar with initials "VM" and online indicator
- Full name, role, university, degree, CGPA
- 6 quick skill pills (Spring Boot, FastAPI, Docker, Selenium, React Native, PostgreSQL)
- 3 CTA buttons: Projects, Resume, Contact
- 4 social quick-links: GitHub, LinkedIn, Email, Phone (all tap-to-open)
- Professional summary card
- Stats row: 6+ Projects · 24+ Tech Skills · 4 Certifications · 1st Hackathon Win

### Screen 2 — About
- Detailed bio paragraph
- 6-card info grid: Education, Institute, Location, Availability, Languages, Interests
- "Currently Building" highlight card (BrewBox project)

### Screen 3 — Skills (24+ Skills)
- Category filter chips: All, Languages, Backend/APIs, Databases, DevOps/CI-CD, Testing/QA, Mobile & Tools
- Each skill shown as a named progress bar with percentage
- Skills grouped by category when "All" is selected

**Full Skills List:**

| Category | Skills |
|----------|--------|
| Languages | Java (90%), JavaScript/TypeScript (85%), Python (82%), Kotlin (78%), Swift (70%) |
| Backend / APIs | Node.js & Express.js (88%), Spring Boot (80%), FastAPI (78%), REST APIs & JWT (92%), MVC & EJS (85%) |
| Databases | PostgreSQL/Supabase (85%), MongoDB (82%), MySQL (85%), Room DB/SQLite (80%) |
| DevOps / CI-CD | Docker (82%), GitHub Actions (88%), Jenkins & Maven (75%), Git & Linux CLI (90%) |
| Testing / QA | Selenium WebDriver (88%), TestNG (84%), Cucumber BDD (80%), Page Object Model (85%) |
| Mobile & Tools | React Native (85%), Android/ZXing (82%), Postman & Jira (88%), IntelliJ & Android Studio (86%) |

### Screen 4 — Projects (6 Projects)
Each card shows: title, subtitle, period, description, tech stack badges, expandable engineering highlights, and a direct GitHub link button.

| # | Project | Period | Tech |
|---|---------|--------|------|
| 1 | **ELEVARE** — AI Career Discovery Platform | Jan 2025–Present | React.js, Node.js, FastAPI, MongoDB, NLP, LLM, JWT |
| 2 | **BookSphere** — DSA-Powered Bookstore | Feb–May 2025 | React 18, Supabase, PostgreSQL, Selenium 4, Cucumber BDD |
| 3 | **Stockify** — Retail Inventory Android App | Aug–Nov 2024 | Android Java, Room DB, ZXing, WorkManager, GitHub Actions |
| 4 | **Selenium CI/CD Framework** — Enterprise Test Suite | Mar–May 2024 | Java, Selenium, TestNG, Maven, GitHub Actions, POM |
| 5 | **CyberScope-AI** — WiFi Security Platform 🏆 1st Place | 2025 | Python, FastAPI, Network Security, Linux |
| 6 | **Travel Agency Management System** — MVC Booking App | Jun–Aug 2024 | Node.js, Express.js, MySQL, EJS, REST APIs |

### Screen 5 — Certifications
| Icon | Certificate | Issuer | Skills Covered |
|------|------------|--------|----------------|
| 🐳 | IBM DevOps & Software Engineering Professional Certificate | IBM · Coursera | DevOps, CI/CD, Docker, Kubernetes, Microservices, Agile |
| ⚡ | Node.js, Express.js & MongoDB Backend Development | IBM · Coursera | Backend Architecture, REST APIs, NoSQL, JWT |
| 🛠️ | Backend Development & API Creation | Packt · Coursera | RESTful Web Services, API Design, Microservices, Security |
| 🧪 | Selenium Automation Testing | Coursera | Selenium WebDriver, TestNG, Automated Testing, QA Frameworks |

### Screen 6 — Resume
- Name, role, professional summary card
- Education: B.Tech IT, MIT ADT University, 2023–2027, CGPA 7.59/10
- Availability: Open to internships
- Core skills chips (first 12 skills)
- **📄 Download Resume (PDF)** button — opens actual PDF from GitHub

### Screen 7 — Contact
| Channel | Details |
|---------|---------|
| 📧 Email | varadmandhare924@gmail.com |
| 📞 Phone | +91-8806438164 |
| 💼 LinkedIn | linkedin.com/in/varad-mandhare-851893291 |
| 🐙 GitHub | github.com/Varadha9 |
| 📍 Location | Pune, Maharashtra, India |

---

## 7. Reusable Components

### Navbar.tsx
```tsx
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
// Horizontal scrollable tab bar with active highlight
// Items: Home | About | Skills | Projects | Certs | Resume | Contact
```

### SkillBar.tsx
```tsx
import { View, Text, StyleSheet } from 'react-native';
// Renders: skill name + percentage + filled progress bar
// Props: name: string, level: number (0–100)
```

### SectionTitle.tsx
```tsx
import { Text, StyleSheet } from 'react-native';
// Renders: section heading with left accent border
// Props: title: string
```

---

## 8. Design System (theme.ts)

```typescript
export const C = {
  bg:      '#0f0f1a',   // Dark navy — app background
  card:    '#1a1a2e',   // Slightly lighter — card surfaces
  accent:  '#6c63ff',   // Purple — primary brand color
  text:    '#e0e0e0',   // Off-white — body text
  muted:   '#888888',   // Grey — labels, subtitles
  border:  '#2a2a4a',   // Subtle — card borders
  green:   '#43e97b',   // Green — online indicator
};
```

---

## 9. Data Architecture (portfolio.ts)

All content is stored in a single typed TypeScript data file with 4 exported interfaces and 6 exported constants:

```typescript
// Interfaces
export interface Skill      { name, level, category }
export interface Project    { title, subtitle, period, desc, tech, color, githubUrl, highlights, featured }
export interface Cert       { title, issuer, year, icon, skills }
export interface Achievement{ title, badge, desc, year }

// Exported Data
export const skills        // 24+ skills with category
export const projects      // 6 projects with full details
export const certs         // 4 certifications
export const achievements  // 4 achievements/honors
export const info          // name, role, bio, education, stats, contact, etc.
```

---

## 10. How to Run

### Prerequisites
```
Node.js >= 22.11.0
Android SDK (API 34/35)
JDK 21
Android phone with USB Debugging ON
```

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/Varadha9/CPAD.git
cd CPAD

# 2. Install dependencies
npm install

# 3. Connect Android phone via USB (enable USB Debugging)

# 4. Forward Metro port to phone
adb reverse tcp:8081 tcp:8081

# 5. Start Metro bundler
npm start

# 6. In a new terminal — build and install on phone
npm run android
```

### Verify TypeScript (0 errors)
```bash
npx tsc --noEmit
```

---

## 11. Git Commit History

| Commit | Description |
|--------|-------------|
| `feat: complete CPAD Assignment 1` | Initial full portfolio + BrewBox source |
| `feat: add resume PDF` | Added resume_updated.pdf to repo |
| `feat: wire Download Resume button to GitHub raw PDF` | ResumeScreen PDF download |
| `fix: ResumeScreen — use correct fields from updated portfolio.ts` | Bug fix |
| `chore: add resume, presentation, and app screenshots` | Assets added |

---

## 12. Achievements Showcased in App

| Badge | Achievement | Year |
|-------|------------|------|
| 🏆 Winner | 1st Place — Cybersecurity Hackathon 2025, MIT ADT University | 2025 |
| 🏅 Finalist | Smart India Hackathon (SIH) Internal Finalist | 2024 |
| 🎓 Leadership | Class Representative — 2 Consecutive Years (60+ students) | 2023–Present |
| 📄 Research | Authored paper: "NLP-Driven Ikigai-Based Career Recommendation Model" | 2025 |

---

## 13. Summary

This is a **React Native mobile application** written in **TypeScript** (`.tsx` files).

- `.tsx` = TypeScript + JSX — the file format
- React Native = the framework that powers the app
- Every screen imports `View`, `Text`, `TouchableOpacity` from `'react-native'`
- The app compiles to a native Android APK and runs directly on an Android phone
- It is **not** a website — it is a **native mobile app**

**Repository:** https://github.com/Varadha9/CPAD
**Live on:** Android (vivo 1919, installed via ADB)
