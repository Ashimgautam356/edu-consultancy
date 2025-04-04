import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";



export default async function oneChat (req:Request, res:Response){

    const client = new PrismaClient();

    const userId = req.body.userId; 
    const chatId:number = Number(req.params.specificChat) 

    try{
        const groupChats = await client.chat.findMany({where:{
            id:chatId
        }})

        res.status(200).json({
            groupChats
        })
    }catch(err){
        console.log(err)
    }
}