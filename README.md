# Varad Vikas Mandhare — Personal Developer Portfolio & Interactive Resume

A modern, high-performance mobile application built with **React Native**, **TypeScript**, and native Android components showcasing the developer profile, technical skills, production-grade projects, interactive resume, certifications, and contact channels for **Varad Vikas Mandhare**.

## Developer Overview

- **Name:** Varad Vikas Mandhare
- **Role:** Backend Engineer · Mobile Developer · DevOps
- **Education:** B.Tech in Information Technology, MIT School of Computing, MIT ADT University, Pune (2023–2027) · CGPA: 7.59 / 10
- **Specialisation:** Software & Mobile App Development
- **GitHub:** [github.com/Varadha9](https://github.com/Varadha9)
- **LinkedIn:** [linkedin.com/in/varad-mandhare](https://www.linkedin.com/in/varad-mandhare-851893291/)
- **Email:** varadmandhare924@gmail.com
- **Phone:** +91-8806438164

---

## Key App Features

1. **Continuous Section Flow with Quick Navigation**:
   - Seamless vertical scrolling across Home, About, Skills, Projects, Interactive Resume, Certifications & Honors, and Contact.
   - Sticky top horizontal navigation bar with smooth scroll-to-section jumping and active section tracking.
2. **Animated Technical Skills**:
   - 24+ technical skills organized into Languages, Backend/APIs, Databases, DevOps/CI-CD, Testing/QA, and Mobile & Tools with smooth `Animated.timing` progress indicators.
3. **Featured Projects Showcase**:
   - `ELEVARE` (AI-Driven Career Discovery Platform, NLP + LLM)
   - `BookSphere` (DSA-Powered Online Bookstore, Dijkstra + Knapsack DP + Supabase)
   - `Stockify` (Retail Inventory Android App with Barcode Scanning)
   - `Selenium CI/CD Automation Framework` (Production-grade test automation)
   - `Travel Agency Management System` (MVC Node.js + Express + MySQL)
   - `CyberScope-AI` (1st Place Hackathon 2025 WiFi Security Platform)
   - Direct clickable links to live GitHub repositories on `github.com/Varadha9`.
4. **Comprehensive Interactive Resume**:
   - Formatted digital resume card mirroring the official resume: Summary, Technical Skills breakdown, Project bullets, Academic credentials, Coursera/IBM certifications, and Hackathon honors.
5. **Direct Contact Integration**:
   - One-tap phone dialing, email drafting, LinkedIn connection, and GitHub profile navigation.

---

## Development & Verification

### Prerequisites
- Node.js `>= 22.11.0` (Node 22 installed via nvm)
- Android SDK (API 34/35) & JDK 21

### Commands

```bash
# Verify TypeScript types
npx tsc --noEmit

# Run ESLint (0 errors, 0 warnings)
npm run lint

# Run Jest unit test suite
npm test

# Test Metro bundling
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output /dev/null

# Build native Android debug APK
cd android && ./gradlew assembleDebug

# Install on connected device via ADB
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```
