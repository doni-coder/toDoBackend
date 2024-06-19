import express,{Router} from "express"
import { registerUser } from "../Controllers/user.controllers"


const router = Router()

router.route("/register").post(registerUser)

export default router