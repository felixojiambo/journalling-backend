import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import entryRoutes from './routes/entryRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', entryRoutes);

export default app;
