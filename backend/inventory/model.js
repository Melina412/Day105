import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  name: String,
  description: String,
  room: String,
  category: String,
});

export const Inventory = mongoose.model('inventory', inventorySchema);
