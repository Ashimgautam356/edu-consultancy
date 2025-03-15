import { Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

export default async function signup(req:Request, res:Response){
    
    const client = new PrismaClient()
    
    const UserInput = z.object({
        userName: z.string().max(30).min(3).trim().toLowerCase(),
        password:z.string().min(6),
        firstName:z.string().trim().max(40),
        lastName:z.string().trim().max(40),
        amount: z.number().positive().min(1).max(10000),
        transactionPin:z.number().positive().min(1).max(999999)
    })

    const isValid = UserInput.safeParse({
        userName:req.body.userName,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        amount:req.body.amount,
        transactionPin:req.body.transactionPin
    })

    if(!isValid.success){
        const errorMessage = isValid.error.formErrors
        res.status(411).json({
            userName:errorMessage.fieldErrors.userName,
            password:errorMessage.fieldErrors.password,
            firstName:errorMessage.fieldErrors.firstName,
            lastName:errorMessage.fieldErrors.lastName,
            amount:errorMessage.fieldErrors.amount,
            transactionPin:errorMessage.fieldErrors.transactionPin
        })

        return;
    }


    try{
        const hashedPassword = await bcrypt.hash(req.body.password,5);
        const hashedPin = await bcrypt.hash(String(req.body.transactionPin),6);

        const userid = await UserModel.create({
            userName:req.body.userName,
            password:hashedPassword,
            firstName:req.body.firstName,
            lastName:req.body.lastName
        })

        await AccountModel.create({
            userId:userid._id,
            balance:req.body.amount
        })
        
        await PinModel.create({
            userId:userid._id,
            transactionPin:hashedPin
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