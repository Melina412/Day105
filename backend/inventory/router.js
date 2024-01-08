import express from 'express';
import { addInventory } from './controller.js';

export const router = new express.Router();

router.post('/', addInventory);
