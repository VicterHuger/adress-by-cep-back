import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, json } from 'express';

import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import router from './routes/router';

dotenv.config();

const app: Express = express();

app.use([
  cors(),
  json(),
  router,
  errorHandlerMiddleware]);

export default app;
