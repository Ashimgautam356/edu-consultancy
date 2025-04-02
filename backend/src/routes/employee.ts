import { Router } from "express";
import signup from "../controllers/employee/auth/signup";
import signin from "../controllers/employee/auth/signin";
import createUser from "../controllers/employee/createUsers";
import { auth } from "../middleware/authenticate";


export const employeeRouter = Router()

employeeRouter.post("/signup",signup)
employeeRouter.post("/signin",signin)

employeeRouter.use(auth)
employeeRouter.post("/create-user",createUser)
