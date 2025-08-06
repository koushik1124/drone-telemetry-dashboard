import express from 'express';
import DroneData from '../models/DroneData.js';
import { io } from '../server.js'; // Import io from server.js to emit events

const router = express.Router();

// POST telemetry data
router.post('/', async (req, res) => {
  try {
    console.log("📥 Received telemetry data:", req.body);

    const data = new DroneData(req.body);
    await data.save();

    // 🔹 Broadcast to all connected WebSocket clients
    io.emit('telemetry', req.body);

    res.status(201).json({ message: 'Telemetry saved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET latest telemetry for all drones
router.get('/latest', async (req, res) => {
  try {
    const latestData = await DroneData.find().sort({ timestamp: -1 }).limit(10);
    res.json(latestData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
