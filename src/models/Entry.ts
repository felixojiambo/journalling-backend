import mongoose, { Document, Schema } from 'mongoose';

export interface IEntry extends Document {
  title: string;
  content: string;
  category: string;
  date: Date;
  userId: Schema.Types.ObjectId;
}

const EntrySchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<IEntry>('Entry', EntrySchema);
