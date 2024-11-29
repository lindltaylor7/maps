import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const router = Router();

router.post('/users', createUser)
router.get('/users', getUsers)

export default router