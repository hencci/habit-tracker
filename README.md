# 🧠 Habit Tracker

A modern, production-grade Habit Tracker web application built with React + TypeScript.
Track daily habits, maintain streaks, visualize progress, and receive browser reminders — all in a clean, scalable frontend architecture.

---

## 🚀 Live Demo

https://hencci-habit-tracker.netlify.app

---

## ✨ Features

### ✅ Habit Management

- Create new habits
- Remove habits
- Mark habits as completed for the current day
- Prevent duplicate completion for the same day

### 🔥 Daily Streak Tracking

- Automatically calculates current streak
- Streak resets if a day is missed
- Calendar-safe calculation using date-fns

### 📊 Progress Visualization

- Weekly progress chart using Chart.js
- Visual insight into habit consistency

### 🔔 Browser Reminders

- Uses the native Notification API
- Requests permission responsibly
- Sends habit reminders when triggered

### 💾 Persistent Storage

- Offline-first architecture
- Uses LocalStorage
- Data survives page refresh and browser restart

---

## 🏗 Architecture Overview

```css
src/
│
├── App.tsx
│
├── components/
│   ├── habits/
│   │   ├── HabitCard.tsx
│   │   ├── HabitList.tsx
│   │   └── AddHabit.tsx
│   │
│   └── charts/
│       └── ProgressChart.tsx
│
├── hooks/
│   ├── useHabits.ts
│   ├── useStreak.ts
│   └── useNotifications.ts
│
├── lib/
│   ├── storage.ts
│   └── dates.ts
│
├── types/
│   └── habit.ts
│
└── main.tsx
```

---

## 🛠 Tech Stack

| Technology               | Purpose               |
| ------------------------ | --------------------- |
| React                    | UI framework          |
| TypeScript               | Type safety           |
| Vite                     | Build tool            |
| Tailwind CSS             | Utility-first styling |
| Chart.js                 | Data visualization    |
| date-fns                 | Date manipulation     |
| Browser Notification API | Reminders             |
| LocalStorage             | Persistence           |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/hencci/habit-tracker.git

# Navigate into the project
cd habit-tracker

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🧪 How Streaks Work

- Each habit stores an array of completed dates in YYYY-MM-DD format.
- Dates are sorted descending.
- Consecutive calendar day differences are calculated.
- Streak breaks if a day gap > 1 is detected.

This avoids timezone bugs and ensures accurate streak tracking.

---

## 🔔 Notifications

This project uses the browser's native Notification API.

Limitations:

- Notifications only work while the tab is open.

- Requires user permission.

Some browsers restrict background behavior.

---

## 🧾 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Henry Moses

Frontend Developer

Passionate about scalable UI architecture and clean engineering patterns.

- [GitHub](https://github.com/hencci)
- [LinkedIn](https://linkedin.com/in/henry-orlu-moses-78bb74286)
