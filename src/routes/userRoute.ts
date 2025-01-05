import { Router } from "express";
import { createNewUser, getAllUsers } from "../controllers/userController";
const router = Router()


router.get('/list', getAllUsers)
router.post('/create', createNewUser)


export default router