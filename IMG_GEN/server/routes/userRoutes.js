import express from 'express';

import { registerUser,loginUser,userCredits,paymentRazorpay,verifyRazorpay } from "../controllers/userController.js";
import authMiddleware from '../middlewares/auth.js';
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits', authMiddleware, userCredits);
userRouter.post('/payrazor',authMiddleware,paymentRazorpay)
userRouter.post('/verifypayment',verifyRazorpay)

export default userRouter;
