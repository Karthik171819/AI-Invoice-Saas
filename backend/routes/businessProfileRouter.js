import express from 'express';
import multer from 'multer';
import path from 'path';

import { clerkMiddleware } from "2clerk/express";

const businessProfileRouter = express.Router();

businessProfileRouter.use(clerkMiddleware());

//multer setup for image handling
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.joind(process.cwd(), "uploads"));
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext =  path.extname(file.originalname);
        cb(null, `business-${unique}${ext}`); 
    },
});

const upload = multer({ storage });

