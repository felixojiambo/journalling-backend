import { Request, Response } from 'express';
import Entry, { IEntry } from '../models/Entry';

export const createEntry = async (req: Request, res: Response) => {
  const { title, content, category, date } = req.body;
  const userId = req.userId; // Assuming userId is added to req by auth middleware
  try {
    const entry = new Entry({ title, content, category, date, userId });
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Error creating entry' });
  }
};

export const getEntries = async (req: Request, res: Response) => {
  const userId = req.userId; // Assuming userId is added to req by auth middleware
  try {
    const entries = await Entry.find({ userId });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching entries' });
  }
};

export const updateEntry = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, category, date } = req.body;
  try {
    const entry = await Entry.findByIdAndUpdate(
      id,
      { title, content, category, date },
      { new: true }
    );
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Error updating entry' });
  }
};

export const deleteEntry = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const entry = await Entry.findByIdAndDelete(id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting entry' });
  }
};
