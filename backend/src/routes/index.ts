import express from 'express'
import { userRouter } from './student';
import { employeeRouter } from './employee';
import { adminRouter } from './admin';

export const router =  express.Router();

router.use('/student',userRouter)
router.use('/employee',employeeRouter)
router.use("/admin",adminRouter)