import { Schema } from 'mongoose';

export const UsersSchema = new Schema({

  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },

  // Private Fields
  tokenCodes: { type: Array, select: false, required: false, default: [] },
  password: { type: String, select: false },
  salt: { type: String, select: false, required: false },

  // Timestamps
  updatedAt: { type: Date, select: false },
  createdAt: { type: Date, select: false },
  __v: { type: Number, select: false },

}, { timestamps: true });
