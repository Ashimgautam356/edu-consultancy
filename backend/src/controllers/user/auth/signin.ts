import { Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

export default async function signin(req:Request,res:Response){
    const client = new PrismaClient()
    const UserInput = z.object({
        email: z.string().max(30).min(3).trim().toLowerCase(),
        password:z.string().min(6),
    })

    const isValid = UserInput.safeParse({
        email:req.body.email,
        password:req.body.password,
    })

    if(!isValid.success){
        const errorMessage = isValid.error.formErrors
        res.status(411).json({
            email:errorMessage.fieldErrors.email,
            password:errorMessage.fieldErrors.password,
        })

        return;
    }


    const isUserValid = await client.student.findFirst({where:{email:req.body.email}});
    const fromUserTable = await client.user.findFirst({where:{email:req.body.email}})

    if(!isUserValid){
        res.status(404).json({
            message:"user not availabel"
        })
        return;
    }
    if(!fromUserTable){
        res.status(404).json({
            message:"user not availabel"
        })
        return;
    }

    const isCorrectPassword = await bcrypt.compare(req.body.password,String(isUserValid.passwordHash))
    if(!isCorrectPassword){
        res.status(411).json({
            message:"password is incorrect"
        })
        return; 
    }
    
    const token = jwt.sign({
        userId: fromUserTable.id
    },`${process.env.JWT_SECRET}`)


    res.cookie("authToken", token, {
        httpOnly: true, // Prevents JavaScript access (XSS protection)
        secure: false, // Only send on HTTPS in production
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // Expires in 7 days
      });
      const userInfo = {
        fullName: fromUserTable.name,
        userId: fromUserTable.id
    }
      res.status(200).json({ message: "Login successful",token:token,userInfo });
    ;


}