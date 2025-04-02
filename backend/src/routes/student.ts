import { Router } from "express";
import signup from "../controllers/user/auth/signup";
import signin from "../controllers/user/auth/signin";

export const userRouter = Router()

userRouter.post("/signup",signup)
userRouter.post("/signin",signin)

