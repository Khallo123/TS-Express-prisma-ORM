import { Request, Response } from "express";


export const getAllUsers = (req : Request, res : Response) => {
    try {
        res.status(201).json({
            isSuccess : true,
            message : 'Successfully fetched all users!'
        })
        
    } catch (error) {
        res.status(500).json({
            isSuccess : false,
            message : 'Something went wrong with the server!'
        })
    }
}

export const createNewUser = (req : Request, res : Response) => {
    try {
        res.status(201).json({
            isSuccess : true,
            message : 'Successfully created new user!'
        })
        
    } catch (error) {
        res.status(500).json({
            isSuccess : false,
            message : 'Something went wrong with the server!'
        })
    }
}