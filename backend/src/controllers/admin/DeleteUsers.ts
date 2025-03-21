import { Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import { PrismaClient, Role} from '@prisma/client'

export default async function signup(req:Request, res:Response){
    
    const client = new PrismaClient()

    const userId:number = req.params.userId as unknown as number; 


    try{

        const exist = await client.user.findUnique({where:{id:userId}})
        if(!exist){
            res.status(403).json({
                message:"user doesn't  exist"
            })
            return;
        }
        
        const role = exist.role; 
        if(role === "STUDENT" ){
            await client.student.delete({where:{
                email:exist.email
            }})
            
            await client.user.delete({where:{
                email:exist.email
            }})
    
            res.status(200).json({
                message:"signup sucessfull"
            })

            return
        }

        await client.employee.delete({where:{
            email:exist.email,
        }
        })
        
        await client.user.delete({where:{
            email:exist.email
        }})

        res.status(200).json({
            message:"signup sucessfull"
        })

       

    }catch(err:any){
        if(err?.code == 11000){
            res.status(411).json({
                message:"employee doesn't exist"
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