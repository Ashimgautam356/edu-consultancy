import { Router } from "express";
import signup from "../controllers/auth/signup";
import signin from "../controllers/auth/signin";

export const userRouter = Router()

userRouter.post("/signup",signup)
userRouter.post("/signin",signin)

