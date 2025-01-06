import { Request, Response } from "express";
import { defaultErrorMessage } from "../contenents";


export const getAllUsers = (req : Request, res : Response) => {
    try {
        res.status(200).json({
            isSuccess : true, 
            message : "Successfully fetched all users!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccess : false,
            message : defaultErrorMessage
        })
        
    }
}

export const createNewUser = (req : Request, res : Response) => {
    try {
        res.status(200).json({
            isSuccess : true, 
            message : "Successfully created new user!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccess : false,
            message : defaultErrorMessage
        })
        
    }
}