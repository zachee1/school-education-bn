import mongoose from 'mongoose';
import { connect } from 'mongoose';
const connectDB = async () => {
  try {
    const mongoURI: string = process.env.MONGO_URI;
    await connect(mongoURI);
    mongoose.set('strictQuery', false);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
