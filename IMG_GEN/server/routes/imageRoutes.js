import express from 'express';
import { generateImage } from '../controllers/imageController.js';
import authMiddleware from '../middlewares/auth.js';

const imagerouter = express.Router();

imagerouter.post('/generate-image', authMiddleware, generateImage);

export default imagerouter;