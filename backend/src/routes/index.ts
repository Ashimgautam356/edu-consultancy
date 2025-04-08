import express from 'express'
import { userRouter } from './student';
import { employeeRouter } from './employee';
import { adminRouter } from './admin';
import getOldMessage from '../controllers/room/getOldMessage';
import getCoutnry from '../controllers/getCountry';
import getGroupChat from '../controllers/getGroupChat';
import { auth } from '../middleware/authenticate';
import oneChat from '../controllers/oneChat';
import updateUser from '../controllers/updateUser';

export const router =  express.Router();

router.use('/student',userRouter)
router.use('/employee',employeeRouter)
router.use("/admin",adminRouter)



router.get("/message/:chatId",getOldMessage)
router.get("/country",getCoutnry)

router.get("/chat/:specificChat",oneChat)
router.use(auth)
router.get("/chat",getGroupChat)
router.put("/update-user",updateUser)