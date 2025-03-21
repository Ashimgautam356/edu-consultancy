import { Router } from "express";
import signup from "../controllers/admin/auth/signup";
import signin from "../controllers/admin/auth/signin";


export const adminRouter = Router()

adminRouter.post("/signup",signup)
adminRouter.post("/signin",signin)

