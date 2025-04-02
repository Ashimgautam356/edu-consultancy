import { Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import { PrismaClient} from '@prisma/client'

export default async function createUni(req:Request, res:Response){
    
    const client = new PrismaClient()

    const UserInput = z.object({
        countryId: z.number(),
        uniName:z.string()
    })

    const isValid = UserInput.safeParse({
        countryId:req.body.countryId,
        uniName:req.body.uniName
    })

    if(!isValid.success){
        const errorMessage = isValid.error.formErrors
        res.status(411).json({
            countryId:errorMessage.fieldErrors.countryId,
            uniName:errorMessage.fieldErrors.uniName
        })

        return;
    }


    try{

        const exist = await client.universities.findFirst({where:{name:req.body.uniName}})
        if(exist){
            res.status(403).json({
                message:"uni already exist"
            })
            return;
        }
        
        
        await client.universities.create({data:{
            countryId:req.body.countryId,
            name:req.body.uniName
        }})

        res.status(200).json({
            message:"inserted"
        })

       

    }catch(err:any){
        if(err?.code == 11000){
            res.status(411).json({
                message:"uni Already exist"
            })
            return 
        }

        console.log(err)
        res.status(500).json({
            message:"internal server error",
            error:err
        })
    }


}