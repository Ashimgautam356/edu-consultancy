import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


export default async function getCoutnry(req:Request, res:Response) {
    const client = new PrismaClient();

    try{
        const countries = await client.countries.findMany();

        res.status(200).json({
            countries
        })
    }catch(err){
        console.log(err)
    }
}