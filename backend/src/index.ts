import  express  from "express";
import { router } from "./routes";
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()


app.use(cors({
  origin: "http://localhost:3000",  
  credentials: true, 
}))

app.use(express.json())
app.use(cookieParser())
app.use("/api/v1",router)


app.listen(3005,()=>{
    console.log("listinig to port 3005")
})