import { Router } from "express";
import { createUser, getUsers, deleteUser } from "../controllers/user.controller.js";

const router = Router();

router.post('/users', createUser)
router.get('/users', getUsers)
router.delete('/users/:id', deleteUser)

export default router