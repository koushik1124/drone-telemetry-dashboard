# 🚁 Drone Telemetry Dashboard

A **real-time drone telemetry system** built with **Node.js**, **MongoDB**, and **Socket.IO**, featuring a live dashboard with a **map** and **data table** to monitor drones in action.

This project simulates drone telemetry, stores it in MongoDB, and broadcasts it via WebSockets to a browser-based dashboard — all without needing real drone hardware.

---

## 📌 Features
- **Real-time telemetry** updates via WebSockets
- **MongoDB storage** for telemetry history
- **Simulator** for generating realistic drone data
- **Interactive dashboard** with:
  - Live **map view** (Leaflet.js) of drone positions
  - Real-time **data table** for altitude, speed, battery, and status
- Supports **multiple drones** updating simultaneously

---

## 🛠️ Tech Stack
**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Socket.IO for real-time updates
- REST API for historical data

**Frontend Dashboard:**
- HTML + JavaScript
- Leaflet.js for mapping
- Socket.IO client

**Simulation:**
- Node.js script generating fake drone telemetry

---

## 📂 Project Structure
drone-telemetry-dashboard/
│
├── backend/ # Backend API + WebSocket server
│ ├── config/ # DB connection config
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ └── server.js # Main backend entry
│
├── simulator/ # Drone telemetry simulation script
│ └── droneSimulator.js
│
├── dashboard/ # Frontend dashboard
│ └── index.html
│
├── .gitignore
└── README.md

yaml
---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/drone-telemetry-dashboard.git
cd drone-telemetry-dashboard
2️⃣ Backend Setup
bash
cd backend
npm install
Create a .env file in the backend/ folder:

ini
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the backend:

bash
npm run dev
You should see:

arduino
✅ MongoDB Connected
🚀 Server running on port 5000
3️⃣ Start the Drone Simulator
In a new terminal:

bash
node simulator/droneSimulator.js
4️⃣ Open the Dashboard
Open dashboard/index.html in your browser.

You will see live drone positions on the map and telemetry updates in the table.

📡 API Endpoints
GET /api/telemetry/latest – Fetch latest 10 telemetry entries
POST /api/telemetry – Submit telemetry data (used by simulator)

📸 Screenshots
Live Dashboard with Map & Telemetry Table

🎯 Use Cases
Simulating drone fleet management systems

Testing IoT + real-time data pipelines

Demonstrating backend + WebSocket skills to recruiters

yaml
### **Next steps for you in VS Code**
1. Save your screenshot file as:
dashboard-screenshot.png

sql
in your **project root folder** (same level as README.md).
2. Replace `YOUR_USERNAME` in README.md with your actual GitHub username.
3. Commit and push:
```bash
git add README.md dashboard-screenshot.png
git commit -m "Add README and project screenshot"
git push
