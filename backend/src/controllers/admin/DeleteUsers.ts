import { Request,Response } from 'express'
import { PrismaClient, Role} from '@prisma/client'

export default async function deleteUser(req:Request, res:Response){
    
    const client = new PrismaClient()

    const deleteuserId:number = req.body.deleteuserId ;  

    try{

        const exist = await client.user.findUnique({where:{id:deleteuserId}})
        console.log(exist)
        if(!exist){
            res.status(403).json({
                message:"user doesn't  exist"
            })
            return;
        }
        
        const role:Role = exist.role; 

        if(role === "STUDENT" ){
            await client.student.delete({where:{
                email:exist.email
            }})
            
            await client.user.delete({where:{
                email:exist.email
            }})
    
            res.status(200).json({
                message:"student has been deleted"
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
            message:"employee has been deleted"
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