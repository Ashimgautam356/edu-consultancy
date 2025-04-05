import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export default async function getOldMessage(req:Request, res: Response) {
    const client = new PrismaClient();


    const roomId:number = Number(req.params.chatId); 
    
    try{
    const messages = await client.message.findMany({
        where:{chatId:roomId},
        include:{
            sender:{
                select:{
                    name:true
                }
            }
        },
        orderBy:{
            id:"asc"
        },
        take: 50  
    })

    res.status(200).json({
        messages
    })
}catch(err){

    console.log("error while getting message")
    console.log(err)
}

}