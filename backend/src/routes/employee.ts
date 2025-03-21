import { Router } from "express";
import signup from "../controllers/employee/auth/signup";
import signin from "../controllers/employee/auth/signin";


export const employeeRouter = Router()

employeeRouter.post("/signup",signup)
employeeRouter.post("/signin",signin)

