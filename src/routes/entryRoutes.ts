import express from 'express';
import { createEntry, getEntries, updateEntry, deleteEntry } from '../controllers/entryController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/entries', authMiddleware, createEntry);
router.get('/entries', authMiddleware, getEntries);
router.put('/entries/:id', authMiddleware, updateEntry);
router.delete('/entries/:id', authMiddleware, deleteEntry);

export default router;
