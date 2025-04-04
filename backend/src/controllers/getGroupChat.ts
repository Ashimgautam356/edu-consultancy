import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";



export default async function getGroupChat (req:Request, res:Response){

    const client = new PrismaClient();

    const userId = req.body.userId; 

    try{
        const groupChats = await client.chat.findMany({where:{
            chatType: "GROUP"
        }})

        res.status(200).json({
            groupChats
        })
    }catch(err){
        console.log(err)
    }
}