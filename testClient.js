import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("✅ Connected to WebSocket server");
});

socket.on("telemetry", (data) => {
  console.log("📡 Live update received:", data);
});
