import { Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

export default async function signup(req:Request, res:Response){
    
    const client = new PrismaClient()

    const UserInput = z.object({
        email: z.string().email().max(30).min(3).trim().toLowerCase(),
        password:z.string().min(6),
        firstName:z.string().trim().max(40),
        lastName:z.string().trim().max(40),
        phone:z.string().length(10).optional()
    })

    const isValid = UserInput.safeParse({
        email:req.body.email,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone
    })

    if(!isValid.success){
        const errorMessage = isValid.error.formErrors
        res.status(411).json({
            email:errorMessage.fieldErrors.email,
            password:errorMessage.fieldErrors.password,
            firstName:errorMessage.fieldErrors.firstName,
            lastName:errorMessage.fieldErrors.lastName,
            phone:errorMessage.fieldErrors.phone
        })

        return;
    }


    try{

        const exist = await client.user.findFirst({where:{email:req.body.email}})
        if(exist){
            res.status(403).json({
                message:"email already exist"
            })
            return;
        }

        const fullName = req.body.firstName.trim() +" " +req.body.lastName.trim()

        const hashedPassword = await bcrypt.hash(req.body.password,5);

        const userid = await client.user.create({data:{
            email:req.body.email,
            passwordHash:hashedPassword,
            name: fullName,
            phone: req.body.phone

        }
        })

        res.status(200).json({
            message:"signup sucessfull"
        })

    }catch(err:any){
        if(err?.code == 11000){
            res.status(411).json({
                message:"user Already exist"
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