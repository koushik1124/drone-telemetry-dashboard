import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/db.js';
import telemetryRoutes from './routes/telemetry.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Create HTTP server
const httpServer = createServer(app);

// Create WebSocket Server
const io = new Server(httpServer, { cors: { origin: '*' } });

// ✅ Export io so other modules (like telemetry.js) can use it
export { io };

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log("📡 Client connected");
  socket.on('disconnect', () => console.log("❌ Client disconnected"));
});

// REST API Routes
app.use('/api/telemetry', telemetryRoutes);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
