import mongoose from 'mongoose';
import dotenv from 'dotenv';

import logger from '../utils/logger';
import User from './models/user';
import MessageModel from './models/message';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { connection } = mongoose;
connection.on('error', err => logger.error(err));
connection.once('open', () => logger.info('Connected to MongoDB'));

export default {
  User,
  MessageModel,
};
