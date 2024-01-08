import { Inventory } from './model.js';

export async function addInventory(req, res) {
  const inventory = new Inventory(req.body);
  console.log({ inventory });

  try {
    await inventory.save();
    res.status(201).json({ message: `${inventory.name} wurde erstellt` });
  } catch (error) {
    console.log('error:', error);
    res.status(500).end();
  }
  res.end();
}
