import mongoose from 'mongoose';

const droneDataSchema = new mongoose.Schema({
  droneId: String,
  latitude: Number,
  longitude: Number,
  altitude: Number,
  speed: Number,
  battery: Number,
  status: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('DroneData', droneDataSchema);
