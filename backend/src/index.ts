import  express  from "express";
import { router } from "./routes";

const app = express()


app.use(express.json())


app.use("/api/v1",router)


app.listen(3005,()=>{
    console.log("listinig to port 3005")
})