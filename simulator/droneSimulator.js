import axios from 'axios';

const API_URL = 'http://localhost:5000/api/telemetry';

function randomValue(min, max) {
  return Math.random() * (max - min) + min;
}

async function sendTelemetry() {
  const telemetry = {
    droneId: "DRONE_" + Math.floor(Math.random() * 5 + 1),
    latitude: randomValue(17.0, 17.6),
    longitude: randomValue(78.0, 78.6),
    altitude: randomValue(50, 300),
    speed: randomValue(0, 80),
    battery: randomValue(20, 100),
    status: Math.random() > 0.2 ? "ACTIVE" : "IDLE"
  };

  try {
    await axios.post(API_URL, telemetry);
    console.log("✅ Sent:", telemetry);
  } catch (err) {
    console.error("❌ Error sending telemetry", err.message);
  }
}

// Send data every 2 seconds
setInterval(sendTelemetry, 2000);
