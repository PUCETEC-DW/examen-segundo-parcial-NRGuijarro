import express from 'express';
import tasksRoutes from './routes/tasksRoutes.js';

const app = express();
app.use(express.json());

app.use('/tasks', tasksRoutes);

export default app;