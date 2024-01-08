import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import 'dotenv/config';

import { router as inventoryRouter } from './inventory/router.js';

await mongoose.connect(process.env.MONGODB);

const app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/inventory', inventoryRouter);

app.listen(process.env.PORT, () =>
  console.log('express läuft auf port:', process.env.PORT)
);
