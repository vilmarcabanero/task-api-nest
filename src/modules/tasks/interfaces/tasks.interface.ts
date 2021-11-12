import { Document } from 'mongoose';

export interface ITask extends Document {
  task: string;
  isActive: boolean;
  complete: boolean;
  userId: string;
}
