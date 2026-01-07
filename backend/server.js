import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import {connectDB} from './config/db.js';

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json({limit: "20mb"}));
app.use(clerkMiddleware());
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

//DB
connectDB();

//Routes

app.get('/', (req, res) => {
    res.send('API is running...');  
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});