import { Document } from 'mongoose';

export interface IUser extends Document {
  firstName?: string;
  lastName?: string;
  email?: string;
  tokenCode?: string;
  tokenCodes?: string;
  password?: string;
  salt?: string;
}
