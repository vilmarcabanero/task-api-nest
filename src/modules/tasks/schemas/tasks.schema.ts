import { Schema } from 'mongoose';

export const TasksSchema = new Schema(
  {
    task: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    complete: { type: Boolean, required: true, default: false },
    userId: { type: String, required: true },

    // Timestamps
    updatedAt: { type: Date, select: false },
    createdAt: { type: Date, select: false },
    __v: { type: Number, select: false },
  },
  { timestamps: true },
);
