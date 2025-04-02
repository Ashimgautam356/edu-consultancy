import { Router } from "express";
import signup from "../controllers/admin/auth/signup";
import signin from "../controllers/admin/auth/signin";
import { auth } from "../middleware/authenticate";
import addCountry from "../controllers/admin/addCountry";
import createUsers from "../controllers/admin/createUsers";
import deleteUser from "../controllers/admin/DeleteUsers";



export const adminRouter = Router()

adminRouter.post("/signup",signup)
adminRouter.post("/signin",signin)


adminRouter.use(auth)

adminRouter.post("/add-country",addCountry)
adminRouter.post("/create-user",createUsers)
adminRouter.delete('/delete-user',deleteUser)