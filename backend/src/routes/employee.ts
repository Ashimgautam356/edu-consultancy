import { Router } from "express";
import signup from "../controllers/user/auth/signup";
import signin from "../controllers/user/auth/signin";

export const employeeRouter = Router()

employeeRouter.post("/signup",signup)
employeeRouter.post("/signin",signin)

