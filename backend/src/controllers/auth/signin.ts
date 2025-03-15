import { Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function signin(req:Request,res:Response){
    const UserInput = z.object({
        userName: z.string().max(30).min(3).trim().toLowerCase(),
        password:z.string().min(6),
    })

    const isValid = UserInput.safeParse({
        userName:req.body.userName,
        password:req.body.password,
    })

    if(!isValid.success){
        const errorMessage = isValid.error.formErrors
        res.status(411).json({
            userName:errorMessage.fieldErrors.userName,
            password:errorMessage.fieldErrors.password,
        })

        return;
    }


    // const isUserValid = await UserModel.findOne({userName:req.body.userName});
    // if(!isUserValid){
    //     res.status(404).json({
    //         message:"user not availabel"
    //     })
    //     return;
    // }

    // const isCorrectPassword = await bcrypt.compare(req.body.password,String(isUserValid.password))
    // if(!isCorrectPassword){
    //     res.status(411).json({
    //         message:"password is incorrect"
    //     })
    //     return; 
    // }
    
    // const token = jwt.sign({
    //     userId: isUserValid._id
    // },`${process.env.JWT_SECRET}`)

    // const userBalance = await AccountModel.findOne({userId:isUserValid._id});
    res.status(200).json({
        message:"login sucessfull",
        // firstName:isUserValid.firstName,
        // lastName:isUserValid.lastName,
        // balance:userBalance?.balance,
        // userId:isUserValid?._id,
        // token: token
    })


}