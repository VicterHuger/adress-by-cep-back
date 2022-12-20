import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, json } from 'express';

dotenv.config();

const app: Express = express();

app.use([json(), cors()]);

export default app;
