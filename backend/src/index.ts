import  express  from "express";
import { router } from "./routes";
import cors from 'cors'
const app = express()


app.use(express.json())

app.use(cors())
app.use("/api/v1",router)


app.listen(3005,()=>{
    console.log("listinig to port 3005")
})