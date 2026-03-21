# UniGrid
# 🌐 UniGrid – Smart Campus Platform

UniGrid is a modern web platform designed to streamline student life by integrating academics, research, community discussions, and campus resources into a single unified system.

---

## 🚀 Features

### 🎓 Academics

* Access syllabus, notes, and previous year question papers
* Organized branch-wise and subject-wise content

### 📚 E-Library

* Browse academic books and resources
* Categorized content with clean UI and quick access

### 🔬 Research Portal

* View research publications, focus areas, and opportunities
* Explore faculty work and ongoing projects

### 🌍 Student Exchange

* Discover global university partnerships
* Explore exchange programs and apply

### 💬 Community (Reddit-style)

* Join topic-based communities
* Create posts and discussions
* Comment on posts
* Anonymous posting option
* Admin approval system (UI-based)

---

## 🧩 Tech Stack

* ⚛️ React.js (Frontend)
* 🎨 CSS (Custom Styling)
* 🔀 React Router DOM (Routing)
* ⚡ Vite (Build Tool)

---

## 📁 Project Structure

```
src/
│
├── components/
│   └── ui/
│       ├── navbar.jsx
│       └── Footer.jsx
│
├── pages/
│   ├── Community/
│   │   ├── Community.jsx
│   │   ├── CommunityDetail.jsx
│   │   ├── Community.css
│   │
│   ├── Academics.jsx
│   ├── Dashboard.jsx
│   ├── Exchange.jsx
│   ├── Library.jsx
│   ├── Research.jsx
│   └── ...
│
├── data/
│   └── communityData.js
│
├── app/
│   └── routes.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔄 Routing System

* `/` → Home
* `/academics` → Academics
* `/library` → E-Library
* `/research` → Research
* `/exchange` → Exchange Program
* `/community` → Community List
* `/community/:id` → Discussion Page

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/unigrid.git
```

2. Navigate to project folder:

```bash
cd unigrid
```

3. Install dependencies:

```bash
npm install
```

4. Ru
