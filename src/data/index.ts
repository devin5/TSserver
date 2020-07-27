import 'dotenv/config';
import mongoose from 'mongoose';
import Users from './models/usersModel';

 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL!, { useNewUrlParser: true,  useUnifiedTopology: true });
};
 
const models = { Users };
 
export { connectDb };
 
export default models;