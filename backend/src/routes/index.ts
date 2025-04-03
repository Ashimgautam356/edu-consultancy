import express from 'express'
import { userRouter } from './student';
import { employeeRouter } from './employee';
import { adminRouter } from './admin';
import getOldMessage from '../controllers/room/getOldMessage';

export const router =  express.Router();

router.use('/student',userRouter)
router.use('/employee',employeeRouter)
router.use("/admin",adminRouter)
router.get("/chat/:chatId",getOldMessage)