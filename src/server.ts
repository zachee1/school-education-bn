import express from 'express';
import { errorMiddleware } from './middleware/errorMiddleware';
import connectDB from '../config/database';
import user from './routes/user';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();

connectDB();
app.set('port', process.env.PORT || 5000);
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API Running');
});
app.use('/', user);
const port = app.get('port');
app.listen(port, () => console.log(`Server started on port ${port}`));
app.use(errorMiddleware);
