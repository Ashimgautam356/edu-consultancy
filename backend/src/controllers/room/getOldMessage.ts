import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export default async function getOldMessage(req:Request, res: Response) {
    const client = new PrismaClient();


    const roomId:number = req.params.chatId as unknown as number; 
    try{
    const messages = await client.message.findMany({
        where:{id:roomId},
        orderBy:{
            id:"desc"
        },
        take: 50  
    })

    res.status(200).json({
        messages
    })
}catch(err){
    console.log("error")
}

}