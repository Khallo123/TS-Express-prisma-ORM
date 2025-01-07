import { Request, Response } from "express";
import { defaultErrorMessage } from "../contenents";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


interface ICreateUserPyload {
    username : string 
    password : string
    phone_number : string
}

export const getAllUsers = async (req : Request, res : Response) => {
    try {
        const users = await prisma.users.findMany()

        res.status(200).json({
            isSuccess : true,
            users
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccess : false,
            message : defaultErrorMessage
        })
        
    }
}

export const createNewUser = async (req : Request, res : Response) => {
    try {
        const {username, password, phone_number} = req.body as ICreateUserPyload 

        if(!username || !password || !phone_number) {
            res.status(400).json({
                isSuccess : false,
                message : "Validation error!"
            })

            return
        }

        const user = await prisma.users.create({
            data: {
                username, 
                password,
                phone_number
            }
        })

        res.status(200).json({
            isSuccess : true, 
            message : "Successfully created new user!",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccess : false,
            message : defaultErrorMessage
        })
        
    }
}